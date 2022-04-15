<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'order_nr', 'price', 'status', 'user_id', 'post_id', 'method_payment',
    ];
    protected $table = 'orders';

    public function post()
    {

        return $this->belongsTo(Post::class);
    }

}
