<?php

namespace Binkode\ChatSystem\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;
use Binkode\ChatSystem\Jobs\Chat\MakeEvent;
use Carbon\Carbon;
use Binkode\ChatSystem\Database\Factories\ConversationFactory;
use Binkode\ChatSystem\Traits\ChatEvent\HasChatEvent;
use Binkode\ChatSystem\Config;
use Binkode\ChatSystem\Contracts\IConversation;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Binkode\ChatSystem\Contracts\IChatEventMaker;

class Conversation extends Model implements IConversation
{
  use HasFactory, HasChatEvent;
  protected $fillable = ['user_id', 'name', 'type'];
  protected $casts    = ['user_id' => 'int'];
  protected $hidden   = ['pivot'];

  /**
   * Reply a message.
   *
   * @param array $message
   * @return Binkode\ChatSystem\Models\Message
   */
  function replyMessage(Message|int $reply, array $message)
  {
    return $this
      ->messages()
      ->create([
        'reply_id' => $reply->id ?? $reply,
        'reply_type' => Config::config('models.message'),
      ] + $message);
  }

  /**
   * Creates a message.
   *
   * @param array $message
   * @return Binkode\ChatSystem\Models\Message
   */
  function createMessage(array $message)
  {
    return $this
      ->messages()
      ->create($message);
  }

  /**
   * Creates a message with token.
   *
   * @param string|int $token
   * @param array $message
   * @return Binkode\ChatSystem\Models\Message
   */
  function createMessageWithToken($token, array $message)
  {
    return $this->messages()
      ->when(
        $token,
        fn($q) => $q->where('metas->token', $token),
        fn($q) => $q->whereNull('id')
      )
      ->firstOrCreate([], $message + ['metas' => $token ? ['token' => $token] : null]);
  }

  /**
   * Adds a user as participant of the conversaton.
   *
   * @param Binkode\ChatSystem\Contracts\IChatEventMaker $user
   * @param string $message
   * @return Binkode\ChatSystem\Models\ConversationUser
   */
  function addParticipant(IChatEventMaker $user, string $message = 'Someone joined the conversation')
  {
    $participant = ['user_id' => $user->getKey()];
    $participant = $this->participants()->firstOrCreate($participant, $participant);

    $participant->wasRecentlyCreated && $this->createActivityMessage([
      'user_id' => $user->getKey(),
      'message' => $message,
    ]);

    return $participant;
  }

  /**
   * Removes a user as participant of the conversaton.
   *
   * @param Binkode\ChatSystem\Contracts\IChatEventMaker $user
   * @param string $message
   * @return bool|null
   */
  function removeParticipant(IChatEventMaker $user, string $message = 'Someone left the conversation')
  {
    $participant = ['user_id' => $user->getKey()];
    $participant = $this->participants()->whereUserId($user->getKey())->first();
    $participant && $this->createActivityMessage([
      'user_id' => $user->getKey(),
      'message' => $message,
    ]);
    return $participant?->delete();
  }

  /**
   * Creates an activity message.
   *
   * @param array $message
   * @return Binkode\ChatSystem\Models\Message
   */
  protected function createActivityMessage(array $message)
  {
    return $this->messages()->create($message + ['type'    => 'activity']);
  }

  protected static function newFactory()
  {
    return ConversationFactory::new();
  }

  /**
   * Adds query where conversation has latest message where message is not a system message.
   *
   * @param Binkode\ChatSystem\Contarcts\IChatEventMaker $user
   * @return QueryBuilder
   */
  function scopeWhereHasLastMessage($q, IChatEventMaker $user = null)
  {
    $q->whereHas(
      'last_message',
      fn($q) =>
      $q->where('type', '!=', 'system')
        ->whereConversationWasntDeleted($user)
    );
  }

  /**
   * create a chatEvent of type `delete` for the `conversation` through the given `user`
   *
   * @param IChatEventMaker $user
   * @param bool|null $row
   * @param bool $all
   * @return Binkode\ChatSystem\Models\ChatEvent
   */
  function makeDelete(IChatEventMaker $user = null, $row = false, $all = false)
  {
    return $this->makeChatEvent($user, 'delete', $row, $all);
  }

  /**
   * create a chatEvent of type `read` for the `conversation` through the given `user`
   *
   * @param IChatEventMaker $user
   * @param bool|null $row
   * @param bool $all
   * @return Binkode\ChatSystem\Models\ChatEvent
   */
  function makeRead(IChatEventMaker $user = null, $row = true, $all = false)
  {
    return $this->makeChatEvent($user, 'read', $row, $all);
  }

  /**
   * create a chatEvent of type `deliver` for the `conversation` through the given `user`
   *
   * @param IChatEventMaker $user
   * @param bool|null $row
   * @param bool $all
   * @return Binkode\ChatSystem\Models\ChatEvent
   */
  function makeDeliver(IChatEventMaker $user = null, $row = true, $all = false)
  {
    return $this->makeChatEvent($user, 'deliver', $row, $all);
  }

  /**
   * create a chatEvent of type `deliver` for the `conversation` through the given `user`
   *
   * @param IChatEventMaker $user
   * @param string $type
   * @param bool|null $row
   * @param bool $all
   * @return Binkode\ChatSystem\Models\ChatEvent
   */
  private function makeChatEvent(IChatEventMaker $user, $type = 'delete', $row = false, $all = false)
  {
    $create = [
      'made_id'    => $this->id,
      'made_type'  => $this::class,
      'type'       => $type,
      'all'        => $all,
    ];

    return $row
      ? $user->chatEventMakers()->create($create)
      : $user->chatEventMakers()->updateOrCreate(
        $create,
        array_merge($create, ['created_at' => now()])
      );
  }

  /**
   * Conversation has one latest message.
   *
   * @return HasOne
   */
  public function last_message(): HasOne
  {
    return $this->hasOne(Config::config('models.message'))->latest();
  }

  /**
   * Adds query where conversation doesn't have the given user as a participant.
   *
   * @param Binkode\ChatSystem\Contarcts\IChatEventMaker $user
   * @return QueryBuilder
   */
  function scopeWhereNotParticipant($q, IChatEventMaker|int $user)
  {
    $q->whereDoesntHave('participants', fn($q) => $q->whereUserId($user->id ?? $user));
  }

  /**
   * Conversation has many conversation user.
   *
   * @return HasMany
   */
  public function participants(): HasMany
  {
    return $this->hasMany(Config::config('models.conversation_user'));
  }

  /**
   * Conversation has one latest conversation user.
   *
   * @param Binkode\ChatSystem\Contarcts\IChatEventMaker|int $user
   * @return HasOne
   */
  public function participant(IChatEventMaker|int $user = null): HasOne
  {
    return $this->hasOne(Config::config('models.conversation_user'))->latest()
      ->when($user, fn($q) => $q->whereUserId($user->id ?? $user));
  }

  /**
   * Conversation has one other latest conversation user.
   *
   * @param Binkode\ChatSystem\Contarcts\IChatEventMaker $user
   * @return HasOne
   */
  public function otherParticipant($user = null): HasOne
  {
    return $this->participant()
      ->where('user_id', '!=', $user->id ?? $user);
  }

  /**
   * Conversation has many other latest conversation user.
   *
   * @param Binkode\ChatSystem\Contarcts\IChatEventMaker $user
   * @return HasOne
   */
  public function otherParticipants($user = null): HasMany
  {
    return $this->participants()
      ->where('user_id', '!=', $user->id ?? $user);
  }

  /**
   * Conversation has many messages.
   *
   * @return HasOne
   */
  public function messages()
  {
    return $this->hasMany(Config::config('models.message'));
  }

  /**
   * Conversation has many unread messages where given user is not the message sender.
   *
   * @param Binkode\ChatSystem\Contarcts\IChatEventMaker $user
   * @return QueryBuilder
   */
  public function unread(int|IChatEventMaker $user = null)
  {
    $user_id = $user->id ?? $user ?? auth()->user()?->id;

    return $this->doesntHaveChatEvents($user_id, 'read')->latest()
      ->when($user_id, fn($q) => $q->whereNotSender($user_id));
  }

  /**
   * Conversation has many undelivered messages where given user is not the message sender.
   *
   * @param Binkode\ChatSystem\Contarcts\IChatEventMaker $user
   * @return QueryBuilder
   */
  function undelivered(int|IChatEventMaker $user = null)
  {
    $user_id = $user->id ?? $user ?? auth()->user()?->id;

    return $this->doesntHaveChatEvents($user_id, 'deliver')
      ->where('user_id', '!=', $user_id);
  }

  /**
   * Conversation has many messages where given user is not the event emitter.
   *
   * @param Binkode\ChatSystem\Contarcts\IChatEventMaker $user
   * @param  string|null $type
   * @return HasMany
   */
  function doesntHaveChatEvents(int|IChatEventMaker $user, $type = null)
  {
    $user_id = $user->id ?? $user;

    return $this->messages()
      ->whereType('user')
      ->whereHas(
        'conversation',
        fn($q) =>
        $q->whereDoesntHave(
          'chatEvents',
          fn($q) =>
          $q->latest()->whereMakerId($user_id)
            ->when($type, fn($q) => $q->whereType($type))
            ->whereColumn('created_at', '>', 'messages.created_at')
        )
      );
  }

  /**
   * Conversation belongs to a user.
   *
   * @return BelongsTo
   */
  public function author(): BelongsTo
  {
    return $this->belongsTo(Config::config('models.user'), 'user_id');
  }

  public function newCollection(array $models = array())
  {
    return new ConversationCollection($models);
  }
}

class ConversationCollection extends Collection
{
  /**
   * Method to mark conversations as delivered.
   *
   * @return BelongsTo
   */
  function makeDeliver(IChatEventMaker $user)
  {
    MakeEvent::dispatch($user, 'deliver', $this)->afterResponse();
    return $this;
  }
}
