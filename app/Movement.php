<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Movement extends Model
{
     protected $fillable = [
        'post_id','looler_id','movement_amount','type_movement_id','suscriptor_id'
    ];
    protected $table = 'movements';

    

     public function type_movement()
    {

        return $this->belongsTo(Type_movement::class);
    }

}
