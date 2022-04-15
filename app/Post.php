<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table    = 'posts';
    protected $fillable = [
        'image', 'description', 'user_id', 'locked','post_state_id',
    ];

    public function user()
    {

        return $this->belongsTo(User::class);
    }

    public function post_image()
    {

        return $this->hasMany(Post_file::class);
    }

    public function post_buy()
    {

        return $this->hasMany(Post_buyed::class);
    }

    public function like()
    {

        return $this->hasMany(Like::class);
    }

    public function scopeFilter($query)
    {

        if (request()->username) {
            $query->whereIn('user_id',
                User::where('username', 'like', "%" . request()->username . "%")->pluck('id')
            );
        }

    }
}
