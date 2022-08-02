<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Notifications\Notifiable;
// use IvanoMatteo\LaravelDeviceTracking\Traits\UseDevices;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'provider', 'provider_id', 'username', 'gender_id', 'country_id', 'status_id', 'dni', 'profile_image', 'role_id', 'api_token', 'menu', 'description', 'user_tag',
        'account_id','last_conection_at'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function gender()
    {

        return $this->belongsTo(Gender::class);
    }

    public function reason_rejection()
    {

        return $this->belongsTo(Reason_rejection::class);
    }

    public function post_buy()
    {

        return $this->hasMany(Post_buyed::class);
    }

    public function country()
    {

        return $this->belongsTo(Country::class);
    }
    public function status()
    {

        return $this->belongsTo(Status::class);
    }
    public function account()
    {

        return $this->belongsTo(Account::class);
    }


     public function scopeSearch($query)
    {
        if (request()->username) {
            $query->where('username', 'like', "%" . request()->username . "%")->orWhere('name','like', "%" . request()->username . "%");
        }
    }

    
}


