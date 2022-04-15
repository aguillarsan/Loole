<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reason_rejection extends Model
{
    protected $table    = 'reason_rejection';
    protected $fillable = [
        'reason'
    ];

}
