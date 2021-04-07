<?php

namespace Myckhel\ChatSystem\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Myckhel\ChatSystem\Traits\ChatEvent\HasMakeChatEvent;
use Myckhel\ChatSystem\Database\Factories\ChatEventFactory;

class ChatEvent extends Model
{
    use HasFactory;
    protected $fillable = ['maker_id', 'maker_type', 'made_id', 'made_type', 'type', 'all', 'created_at'];
    protected $casts    = ['maker_id' => 'int', 'made_id' => 'int', 'all' => 'bool'];

    protected static function newFactory(){
      return ChatEventFactory::new();
    }

    function scopeWithTrashed($q, HasMakeChatEvent $user) {
      $q->select('id', 'maker_id', 'maker_type', 'made_id', 'made_type', 'all')->whereMakerId($user->id)->orWhere('all', true);
    }

    function scopeNotMessanger($q, $userId) {
      $q->whereDoesntHave('message', fn($q) => $q->whereUserId($userId));
    }
    function message() {
      $message = config('chat-system.models.message');
      return $this->belongsTo($message, 'made_id')->whereMadeType($message);
    }
    function conversation() {
      $conversation = config('chat-system.models.message');
      return $this->belongsTo($conversation, 'made_id')->whereMadeType($conversation);
    }

    function scopeWithMakerEvents($q, $maker = null) {
      $maker_id = $maker->id ?? $maker ?? null;
      $q->select(['type', 'made_id', 'maker_id', 'created_at'])
      ->where(fn ($q) =>
        $q->where(
          fn ($q) => $q->makerTypeIs('delete', $maker_id)
        )
        ->orWhere(fn ($q) => $q->makerTypeIsNot('deliver', $maker_id))
        ->orWhere(fn ($q) => $q->makerTypeIsNot('read', $maker_id))
      );
    }


    function scopeMakerTypeIs($q, $type, $maker_id) {
      $q->whereType($type)->whereMakerId($maker_id);
    }
    function scopeMakerTypeIsNot($q, $type, $maker_id) {
      $q->whereType($type)->where('maker_id', '!=', $maker_id);
    }

    function maker(): MorphTo{
      return $this->morphTo();
    }
    function made(): MorphTo{
      return $this->morphTo();
    }
}
