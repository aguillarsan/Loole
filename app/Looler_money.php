<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Looler_money extends Model
{
    protected $table    = 'looler_money';
    protected $fillable = [
        'user_id', 'money'
    ];
}
