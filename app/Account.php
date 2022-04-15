<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $fillable = [
        'bank_id','type_account_id','number_account','method_id'
    ];
    protected $table = 'accounts';

     public function bank()
    {

        return $this->belongsTo(Bank::class);
    }
    public function type_account()
    {

        return $this->belongsTo(Type_account::class);
    }
   
}
