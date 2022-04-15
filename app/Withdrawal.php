<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Withdrawal extends Model
{
    protected $table    = 'withdrawals';
    protected $fillable = [
        'user_id','amount','percent','state_withdrawals_id','withdrawls_proces_date','withdrawls_aprobe_date','withdrawls_finish_date'
    ];
    public function user()
    {

        return $this->belongsTo(User::class);
    }
}
