<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rates extends Model
{
    
    protected $table    = 'rates';
    protected $fillable = [
        'user_id', 'rate_description', 'rate_value'
    ];

}
