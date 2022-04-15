<?php

namespace App\Listeners;

use App\Events\WithdrawalsEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class WithdrawalsListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  WithdrawalsEvent  $event
     * @return void
     */
    public function handle(WithdrawalsEvent $event)
    {
        //
    }
}
