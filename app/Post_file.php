<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post_file extends Model
{
    protected $table    = 'post_file';
    protected $fillable = [
        'post_id', 'path', 'image', 'video',
    ];

    public function post()
    {

        return $this->belongsTo(Post::class);
    }
}
