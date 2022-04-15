<?php
namespace App\Http\Traits;

use App\Notification;
use App\Events\WithdrawalsEvent;
trait NotificationTrait
{
    public function createNotification($data)
    {

        $notification                       = new Notification;
        $notification->message              = $data['message'];
        $notification->user_id              = $data['user_id'];
        $notification->type_notification_id = $data['type_notification_id'];
        $notification->active               = 1;
        $notification->save();

        event(new WithdrawalsEvent($notification));
        return;

    }
}
