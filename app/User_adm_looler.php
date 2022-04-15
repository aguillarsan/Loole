<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User_adm_looler extends Model
{
    protected $table = 'user_adm_looler';

    public function user()
    {

        return $this->belongsTo(User::class);
    }

}
