<?php

namespace App\Listeners;

use App\Events\BuyPostEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class BuyPostListener
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
     * @param  BuyPostEvent  $event
     * @return void
     */
    public function handle(BuyPostEvent $event)
    {
        //
    }
}
