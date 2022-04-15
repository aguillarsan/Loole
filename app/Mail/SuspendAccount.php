<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AccountRegistered extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $mensaje;
    public $subject;
    public $username;
   
    public function __construct($mensaje,$subject,$username)
    {
        $this->mensaje      = $mensaje;
        $this->subject      = $subject;
        $this->username      = $username;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.mail')->subject(  $this->subject  );
    }
}
