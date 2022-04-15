<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Logs extends Model
{
    protected $table = 'logs';
    protected $fillable = ['user_id','message','post_id'];

    public function user()
    {

        return $this->belongsTo(User::class);
    }
}
