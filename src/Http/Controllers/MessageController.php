<?php

namespace Binkode\ChatSystem\Http\Controllers;

use Binkode\ChatSystem\Models\Message;
use Illuminate\Http\Request;
use Binkode\ChatSystem\Http\Requests\PaginableRequest;
use Illuminate\Validation\Rule;
use Binkode\ChatSystem\Events\Message\Created;
// use Binkode\ChatSystem\Notifications\Message\Created as CreatedMessage;
use Binkode\ChatSystem\Config;

class MessageController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index(PaginableRequest $request)
  {
    $request->validate([
      'pageSize'           => 'int',
      'conversation_id'    => 'int|nullable',
      'other_user_id'      => 'int',
      'reply_id'           => 'int',
      'reply_type'         => [
        Rule::requiredIf(fn() => $request->reply_id),
        "in:" . Config::config('models.message'),
      ],
    ]);

    $user     = $request->user();
    $pageSize = $request->pageSize;
    $reply_type  = $request->reply_type;
    $reply_id = $request->reply_id;
    $reply    = [];
    $with     = [
      'reply',
      'trashed' => fn($q) => $q->withAll($user),
      'sender',
    ];

    if ($reply_id) {
      $reply['reply_id']    = (int)$reply_id;
    }
    if ($reply_type) {
      $reply['reply_type']  = $reply_type;
    }

    $messages = $user->messages($request->conversation_id, $request->other_user_id, $reply ?? null)
      // ->withUrls(['image', 'videos'])
      ->whereConversationWasntDeleted($user)
      ->with($with)->latest()
      ->paginate($request->pageSize);

    // $messages->withUrls(['image', 'videos']);
    return $messages;
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    @[
      'reply_id'        => $reply_id,
      'reply_type'      => $reply_type,
      // 'image'           => $image,
      // 'videos'          => $videos,
      'token'           => $token,
      'other_user_id'   => $other_user_id,
      'type'            => $type,
    ] = $request->validate([
      'conversation_id' => 'int',
      'other_user_id'   => ['int', Rule::requiredIf(fn() => !$request->conversation_id)],
      'message'         => '',
      'reply_id'        => 'int',
      'token'           => '',
      'reply_type'      => [
        Rule::requiredIf(fn() => $request->reply_id),
        "in:" . Config::config('models.message'),
      ],
      'type'            => 'in:user,activity',
      // 'videos.*'        => 'mimetypes:video/webm,video/mp,video/mp4,video/quicktime|max:40000',
    ]);
    $user       = $request->user();
    $otherUser  = $other_user_id ? $user->findOrFail($other_user_id) : null;

    $conversation = $user->conversations($request->conversation_id, $request->other_user_id)
      ->first();

    if (!$conversation) {
      $conversation = $user->conversations()->create([
        'user_id' => $user->id,
      ]);
      $conversation->participants()->create([
        'user_id' => $otherUser->id,
      ]);
    }

    $message = $conversation->messages()
      ->when(
        $token,
        fn($q) => $q->where('metas->token', $token),
        fn($q) => $q->whereNull('id')
      )
      ->firstOrCreate(
        [],
        [
          'reply_id'        => $reply_id,
          'reply_type'      => $reply_type,
          'user_id'         => $user->id,
          'message'         => $request->message,
          'type'            => $type ?? 'user',
          'metas'           => $token ? ['token' => $token] : null,
        ]
      );
    $message->loadMorph('reply', [
      Config::config('models.message') => ['reply'],
    ]);

    if ($message->wasRecentlyCreated) {

      // $message->saveImage($image, 'image');
      // $message->saveVideo($videos, 'videos');

      broadcast(new Created($message));

      // $otherUser->notify(new CreatedMessage($message, $user));
    }

    return $message;
  }

  /**
   * Display the specified resource.
   *
   * @param  \Binkode\ChatSystem\Models\Message  $message
   * @return \Illuminate\Http\Response
   */
  public function show($message)
  {
    $message = Config::config('models.message')::findOrFail($message);
    return $message;
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \Binkode\ChatSystem\Models\Message  $message
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Message $message)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \Binkode\ChatSystem\Models\Message  $message
   * @return \Illuminate\Http\Response
   */
  public function destroy(Request $request, $message)
  {
    $message = Config::config('models.message')::findOrFail($message);
    $this->authorize('delete', $message);
    $request->validate([
      'everyone' => 'bool'
    ]);

    $user     = $request->user();
    $everyone = $request->everyone;

    if ($message->participantsHasDeleted(maker_id: $user->id)) {
      return ['status' => $message->forceDelete()];
    }
    return ['status' => $message->makeDelete($user, $everyone)];
  }

  /**
   * Remove the multiple messages from storage.
   *
   * @return \Illuminate\Http\Response
   */
  public function delete(Request $request)
  {
    $request->validate([
      'everyone'    => 'bool',
      'messages'    => 'required|array',
      'messages.*'  => 'int',
    ]);

    $user     = $request->user();
    $everyone = $request->everyone;
    $messages = $request->messages;

    $messages = $user->messages()->whereNotTrashed($user->id)->with(['trashed'])->whereIn('id', $messages)->paginate();

    return $messages->makeDelete($user, $everyone);
  }
}
