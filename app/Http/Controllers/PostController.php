<?php

namespace App\Http\Controllers;

use App\Post;
use App\Post_buyed;
use App\Post_file;
use App\Report_post;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Image;
use Thumbnail;



class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
    }
    public function uploadPostView()
    {
        if (Auth::user()->status_id == 3) {
            return view('user.uploadPost');
        } else {
            return redirect('/home');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function homePost()
    {

        if (Auth::user()->status_id == 4) {
            $user            = User::find(Auth::user()->id);
            $user->status_id = 3;
            $user->save();
        }
        if (Auth::user()->role_id == 2 || Auth::user()->role_id == 3) {
            return view('user.index');
        } else {
            return redirect('/loole-admin-site');
        }
    }

    public function loolerInfo(Request $request)
    {
        try {
            $loolers = User::search()->where('role_id', 2)->where('status_id', 3)->get(['username', 'profile_image', 'user_tag']);
            return $loolers;
        } catch (\Exception $e) {
            return $e;
        }
    }

    public function getAllPost()
    {
        $post = Post::whereIn(
            'user_id',
            User::where('status_id', 3)->pluck('id')
        )->with('user', 'post_image', 'like', 'post_buy')->where('post_state_id', 1)->orderby('id', 'desc')->paginate(2);
        return $post;
    }

    public function getTotal(Request $request)
    {
        $post   = Post::where('user_id', $request->user_id)->where('post_state_id', 1)->count();
        $images = Post_file::whereIn(
            'post_id',
            Post::where('user_id', $request->user_id)->where('post_state_id', 1)->pluck('id')
        )->count('image');
        $videos = Post_file::whereIn(
            'post_id',
            Post::where('user_id', $request->user_id)->where('post_state_id', 1)->pluck('id')
        )->count('video');
        $sell = Post_buyed::whereIn(
            'post_id',
            Post::where('user_id', $request->user_id)->pluck('id')
        )->count('id');

        $data = [
            'post'   => $post,
            'image'  => $images,
            'videos' => $videos,
            'sell'   => $sell,
        ];
        return $data;
    }
    public function getImagesPostProfileLooler(Request $request)
    {
        $images = Post_file::whereIn(
            'post_id',
            Post::where('user_id',  $request->user_id)->where('post_state_id', 1)->pluck('id')
        )->where('image', '!=', null)->with('post.post_buy')->orderby('id', 'desc')->paginate(8);
        return $images;
    }
    public function getVideosPostProfileLooler(Request $request)
    {
        $videos = Post_file::whereIn(
            'post_id',
            Post::where('user_id', $request->user_id)->where('post_state_id', 1)->pluck('id')
        )->where('video', '!=', null)->with('post.post_buy')->orderby('id', 'desc')->paginate(8);
        return $videos;
    }

    public function getPostProfileLooler(Request $request)
    {
        $post = Post::where('user_id', $request->user_id)->where('post_state_id', 1)->with('user', 'post_image', 'post_buy')->orderby('id', 'desc')->paginate(8);
        return response()->json($post);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function uploadPost(Request $request)
    {

        try {
            //****************** DEFINICION DEL PATH ******************//
            $path      = 'loolers/' . md5(Auth::user()->id . Auth::user()->user_tag) . '/post_image';
            $pathVideo = 'loolers/' . md5(Auth::user()->id . Auth::user()->user_tag) . '/post_video';
            $pathThumbs      = 'loolers/' . md5(Auth::user()->id . Auth::user()->user_tag) . '/thumbails';

            //****************** REGISTRO DEL POST ******************//
            $files      = $request->file('files_post');
            $first_file = $files[0];
            $type       = substr($first_file->getClientMimeType(), 0, 5); 

            if ($type == "image") {

                $image_resize = Image::make($first_file->getRealPath())->orientate();

                $filename = \Str::random(5) . md5($first_file->getClientOriginalName()) . '.' . $first_file->getClientOriginalExtension();

                $icon = Image::make('watermark/vector.png');

                $image_resize->insert($icon, 'bottom-right', 70, 70);
                $image_resize->save($path . '/' . $filename, 50);

                $post                = new Post;
                $post->image         = '/' . $path . '/' . $filename;
                $post->user_id       = Auth::user()->id;
                $post->description   = $request->description;
                $post->locked        = $request->block;
                $post->post_state_id = 2;
                $post->price         = (int) $request->valor;

                $post->save();
                $post->post_key = md5(Hash::make($post->id));
                $post->save();
            } else {
                if ($type == "video") {





                    $filename = \Str::random(5) . md5($first_file->getClientOriginalName()) . '.' . 'mp4';
                    #### THUMBAIL VIDEO  ##########
                    $first_file->move($pathVideo, $filename);
                    $path_video = $pathVideo . '/' . $filename;
                    $ffmpeg = "C:\\ffmpeg\\bin\\ffmpeg";
                    $imageFIleThumbail = $pathThumbs . "/" . substr($filename, 0, -4) . ".jpg";
                    $getformSecond = 1;
                    $cmd = "$ffmpeg -i $path_video -an -ss  $getformSecond   $imageFIleThumbail";
                    shell_exec($cmd);
                    ######################






                    $post                = new Post;
                    $post->video         = '/' . $pathVideo . '/' . $filename;
                    $post->user_id       = Auth::user()->id;
                    $post->description   = $request->description;
                    $post->locked        = $request->block;
                    $post->post_state_id = 2;
                    $post->price         = (int) $request->valor;
                    $post->thumbail =  '/' . $imageFIleThumbail;

                    $post->save();
                    $post->post_key = md5(Hash::make($post->id));
                    $post->save();
                }
            }

            //******************************************************//

            //****************** REGISTRO DEL ARCHIVO DEL POST Y SUBIDA DE ARCHIVOS ******************//
            $files = $request->file('files');

            if ($files != null) {

                foreach ($files as $file) {
                    $type = substr($file->getClientMimeType(), 0, 5);

                    $extension = $file->getClientOriginalExtension();
                    //$image_width      = Image::make($file->getRealPath())->width();
                    if ($type == "image") {
                        $image_resize_two = Image::make($file->getRealPath())->orientate();
                        $filename         = \Str::random(5) . md5($file->getClientOriginalName()) . '.' . $file->getClientOriginalExtension();

                        $icon = Image::make('watermark/vector.png');

                        $image_resize_two->insert($icon, 'bottom-right', 70, 70);
                        $image_resize_two->save($path . '/' . $filename, 50);

                        $post_file          = new Post_file;
                        $post_file->image   = '/' . $path . '/' . $filename;
                        $post_file->post_id = $post->id;
                        $post_file->locked        = $request->block;
                        $post_file->save();
                    }

                    //****************** REGISTRO EN LA BD POST_FILE ******************//

                    else {
                        if ($type == "video") {
                            $filename = \Str::random(5) . md5($file->getClientOriginalName()) . '.' . 'mp4';

                            $file->move($pathVideo, $filename);




                            #### THUMBAIL VIDEO  ##########
                            $path_video = $pathVideo . '/' . $filename;
                            $ffmpeg = "C:\\ffmpeg\\bin\\ffmpeg";
                            $imageFIleThumbail = $pathThumbs . "/" . substr($filename, 0, -4) . ".jpg";
                            $getformSecond = 1;
                            $cmd = "$ffmpeg -i $path_video -an -ss  $getformSecond   $imageFIleThumbail";
                            shell_exec($cmd);
                            ######################


                            $post_file          = new Post_file;
                            $post_file->video   = '/' . $pathVideo . '/' . $filename;
                            $post_file->post_id = $post->id;
                            $post_file->thumbail = '/' . $imageFIleThumbail;  
                            $post_file->locked        = $request->block;
                            $post_file->save();
                        }
                    }

                    //******************************************************//

                }
            }

            //******************************************************//
            return response()->json([

                'code' => 200,
            ]);
        } catch (\Exception $e) {
            return response()->json([

                'code'  => 401,
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function deletePost(Request $request)
    {
        $post                = Post::find($request->post_id);
        $post->post_state_id = 4;
        $post->save();
        return;
    }

    public function editDescriptionPost(Request $request)
    {
        $post              = Post::find($request->post_id);
        $post->description = $request->description;
        $post->save();
        return;
    }

    public function reporPost(Request $request)
    {
        $report_post = Report_post::where('user_id', Auth::user()->id)->where('post_id', $request->post_id)->first() ? true : false;
        if (!$report_post) {
            $report_post          = new Report_post;
            $report_post->user_id = Auth::user()->id;
            $report_post->reason  = $request->motivo;
            $report_post->post_id = $request->post_id;
            $report_post->save();
            $data = [
                'message' => 'Publicación reportada con éxito',
                'type'    => 'success',
                'report'  => $report_post,
            ];
            return $data;
        } else {
            if ($report_post) {
                $report_post = [];
                $data        = [
                    'message' => 'Ya reportaste esta publicación',
                    'type'    => 'error',
                    'report'  => $report_post,
                ];
                return $data;
            }
        }
    }
    public function getPostUserView(Request $request)
    {
        $user = User::where('username', $request->username)->first();
        $posts = Post::where('user_id', $user->id)->where('post_state_id', 1)->with('user', 'post_image', 'post_buy')->orderby('id', 'DESC')->paginate(10);
        return $posts;
    }
}
