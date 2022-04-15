<?php

namespace App\Http\Controllers;

use App\Post;
use App\Post_file;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DetailProfileLoolerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function getProfileLooler($user)
    {
        $looler = User::where('username', $user)->with('post_buy')->first();
        
        if(!$looler){
            return redirect('/home');
        }else{
        $total_post    = Post::where('user_id', $looler->id)->count();
        $suscriptor_id = Auth::user()->id;
        $data          =
            [
            'user'          => $looler,

            'total_post'    => $total_post,
            'suscriptor_id' => $suscriptor_id,
        ];
        return view('profile.loolerProfile', compact('data'));
        }
      
    }

    public function getPostProfileLoolerSuscriptorWatch(Request $request)
    {
        $post = Post::where('user_id', $request->user_id)->where('post_state_id',1)->with('post_buy','user','post_image')->orderby('id', 'desc')->paginate(9);

        return response()->json($post);
    }
    public function getData(Request $request)
    {

        $request->route()->getName();
        $rute = json_encode($request->route());
        $r    = json_decode($rute);
        foreach ($r as $list) {
            $user = $list;
            return $this->getProfileLooler($user);
        }

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getPostProfileLoolerVideoSuscriptorWatch(Request $request)
    {
        $videos = Post::where('user_id', $request->user_id)->where('video', '!=', null)->orderby('id', 'desc')->paginate(9);

        if (!$videos->isEmpty()) {

            return response()->json($videos);
        } else {
            $videos = Post_file::where('user_id', $request->user_id)->where('video', '!=', null)->orderby('id', 'desc')->paginate(9);
            return response()->json($videos);
        }

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
