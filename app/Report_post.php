<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Report_post extends Model
{
    protected $table    = 'report_posts';
    protected $fillable = [
        'user_id', 'post_id','reason'
    ];
}
