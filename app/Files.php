<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Files extends Model
{
    protected $table    = 'files';
    protected $fillable = [
        'user_id', 'path', 'file_name'
    ];
}
