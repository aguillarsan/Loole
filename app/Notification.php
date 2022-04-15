<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $table    = 'notifications';
    protected $fillable = ['mesage', 'user_id', 'type_notification_id'];

    public function user()
    {

        return $this->belongsTo(User::class);
    }


    public function type_notification()
    {

        return $this->belongsTo(Type_notification::class);
    }

    
}
