<?php

namespace App\Http\Controllers;

use App\Mail\AccountRegistered;
use Illuminate\Http\Request;
use App\Post;
use App\User_adm_looler;

class MailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        \Mail::to('saguilarsanhuza@gmail.com')->send(new AccountRegistered());
        return;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function reporPost(Request $request)
    {   
        $post = Post::find($request->post_id);
        $mensaje = 'Un usuario de Loole reporto una publicación del Looler'.' '.'@'.$post->user->username.' '.'por'.' '.$request->reason;
        $subject = 'Publicacón reportada';
        $adms = User_adm_looler::with('user')->get();
        foreach($adms as $admins){
            \Mail::to($admins->user->email)->send(new AccountRegistered($mensaje, $subject, $admins->user->name));
        }
        
    }

}
