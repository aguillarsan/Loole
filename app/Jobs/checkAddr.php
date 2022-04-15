<?php

namespace App\Jobs;

use App\Client_addr;
use App\Logs;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Auth;

class checkAddr implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */

    public function __construct()
    {

    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try {
            $user = Auth::user();
            $addr = $_SERVER['REMOTE_ADDR'];

            $exist_addr = Client_addr::where('user_id', $user->id)->first() ? true : false;
            if (!$exist_addr) {
                $client_ip          = new Client_addr;
                $client_ip->user_id = $user->id;
                $client_ip->addr    = $addr;
                $client_ip->save();
            } else {
                $addr_frecuent = Client_addr::where('user_id', $user->id)->where('addr', $addr)->first() ? true : false;
                if (!$addr_frecuent) {
                    $mensaje = 'Se inicio sessión desde otro dispositivo, si no has sido tu ';
                    $subject = 'Cuenta registrada';
                    \Mail::to($request->email)->send(new AccountRegistered($mensaje, $subject, $username));
                }
            }

        } catch (\Exception $exception) {
            $log          = new Logs;
            $log->user_id = 1;
            $log->message = $exception->getMessage();
            $log->post_id = 1;
            $log->save();
            return;
        }
    }
}
