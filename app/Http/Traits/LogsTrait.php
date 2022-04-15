<?php
namespace App\Http\Traits;

use App\Logs;
trait LogsTrait
{
    public function createLog($data)
    {

        $log          = new Logs;
        $log->message = $data['message'];
        $log->user_id = $data['user_id'];
        $log->post_id = $data['post_id'];
        $log->save();
        return;

    }
}
