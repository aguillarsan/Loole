<?php

namespace App\Http\Controllers;

use App\Files;
use App\Http\Traits\LogsTrait;
use App\Http\Traits\NotificationTrait;
use App\Looler_money;
use App\Mail\AccountRegistered;
use App\Movement;
use App\Post;
use App\Reason_rejection;
use App\User;
use App\User_adm_looler;
use App\Withdrawal;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Post_file;
use App\Logs;

class AdminController extends Controller
{
    use NotificationTrait, LogsTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        $adm = User_adm_looler::where('user_id', Auth::user()->id)->first() ? true : false;
        if (Auth::user()->role_id == 1 && $adm) {
            return view('admin.index');
        } else {
            return view('error.404');
        }

    }

    public function postRevision()
    {
        $adm = User_adm_looler::where('user_id', Auth::user()->id)->first() ? true : false;
        if (Auth::user()->role_id == 1 && $adm) {
            return view('admin.revision');
        } else {
            return view('error.404');
        }

    }

    public function getPostRevision(Request $request)
    {
        if($request->modulo == 1){
            $post          = Post::where('post_state_id', '!=',3)->with('user', 'post_image')->get();
        }else{
            $post          = Post::where('post_state_id', $request->modulo)->with('user', 'post_image')->get();
        }
       
        $post_revision = Post::where('post_state_id', 2)->count();
        $post_rejected = Post::where('post_state_id', 3)->count();
        $post_aproved  = Post::where('post_state_id', 1)->count();
        $data          = [
            'posts'         => $post,
            'post_revision' => $post_revision,
            'post_rejected' => $post_rejected,
            'post_aproved'  => $post_aproved,

        ];
        return $data;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getCuentasPendientes(Request $request)
    {
        if (Auth::user()->role_id == 1) {
            
            if ($request->modulo  != 0) {
                $users = User::where('status_id', $request->modulo )->where('role_id', 2)->with('gender', 'country', 'status', 'reason_rejection')->get();
            } else {
                $users = User::where('role_id', '!=', 1)->with('gender', 'country', 'status', 'reason_rejection')->get();
            }

            $total_pendientes = User::where('status_id', 1)->where('role_id', 2)->count();
            $total_rechazadas = User::where('status_id', 5)->where('role_id', 2)->count();
            $total_usuarios   = User::where('status_id', 3)->where('role_id', 2)->count();
            $data             = [
                'users'            => $users,
                'total_pendientes' => $total_pendientes,
                'total_usuarios'   => $total_usuarios,
                'total_rechazadas' => $total_rechazadas,
            ];
            return response()->json($data);
        } else {
            return view('error.404');
        }

    }

    public function requestMoney()
    {
        return view('admin.money');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getImageDni(Request $request)
    {
        if (Auth::user()->role_id == 1) {
            $image = Files::where('user_id', $request->user_id)->where('identified', $request->identified)->first();

            $real_path = $image->path . '/' . $image->file_name;
            return response()->json($real_path);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function approveAccountLooler(Request $request)
    {
        try {
            if (Auth::user()->role_id == 1) {
                $user = User::find($request->user_id);

                $user->update(['status_id' => 3]);
                $mensaje  = 'Nuestro equipo verifico la información que nos entregaste, ahora podrás publicar tu contenido en Loole';
                $subject  = 'Cuenta verificada';
                $username = $user->username;

                \Mail::to($user->email)->send(new AccountRegistered($mensaje, $subject, $username));
                return;
            }
        } catch (Exception $e) {
            return $e;
        }

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function denyAccountLooler(Request $request)
    {
        try {
            if (Auth::user()->role_id == 1) {
                $user                      = User::find($request->user_id);
                $user->status_id           = 5;
                $user->reason_rejection_id = $request->motivo_rechazo_id;
                $user->save();
                $rejection = Reason_rejection::find($request->motivo_rechazo_id);
                $mensaje   = 'Su cuenta fue rechazada,' . ' ' . $rejection->reason;
                $subject   = 'Cuenta rechazada';
                $username  = $user->username;
                \Mail::to($user->email)->send(new AccountRegistered($mensaje, $subject, $username));

                return;
            }
        } catch (Exception $e) {
            return $e;
        }

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function getMoneyRequest(Request $request)
    {
        $state = null;
        if (Auth::user()->role_id == 1) {
            if ($request->modulo == "55a54008ad1ba589aa210d2629c1df41") {
                $state = 1;
            } else {
                if ($request->modulo == '9e688c58a5487b8eaf69c9e1005ad0bf') {
                    $state = 2;
                } else {
                    if ($request->modulo == '8666683506aacd900bbd5a74ac4edf68') {
                        $state = 3;
                    } else {
                        if ($request->modulo == 'ec7f7e7bb43742ce868145f71d37b53c') {
                            $state = 4;
                        }
                    }
                }
            }

        }

        $request_money = Withdrawal::with('user.account', 'user.account.bank', 'user.account.type_account')->where('state_withdrawals_id', $state)->get();
        $wait_aprove   = Withdrawal::where('state_withdrawals_id', 1)->count();
        $process       = Withdrawal::where('state_withdrawals_id', 2)->count();
        $aprove        = Withdrawal::where('state_withdrawals_id', 3)->count();
        $finish        = Withdrawal::where('state_withdrawals_id', 4)->count();
        $data          = [
            'request_money' => $request_money,
            'wait_aprove'   => $wait_aprove,
            'process'       => $process,
            'aprove'        => $aprove,
            'finish'        => $finish,
        ];
        return $data;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateWithdrals(Request $request)
    {

        $withdrawal = Withdrawal::find($request->id);

        if ($withdrawal->state_withdrawals_id == 1) {
            $withdrawal->state_withdrawals_id   = 2;
            $withdrawal->withdrawls_proces_date = Carbon::now();
        } else {
            if ($withdrawal->state_withdrawals_id == 2) {
                $withdrawal->state_withdrawals_id   = 3;
                $withdrawal->withdrawls_aprobe_date = Carbon::now();
            } else {
                if ($withdrawal->state_withdrawals_id == 3) {
                    $withdrawal->state_withdrawals_id   = 4;
                    $withdrawal->withdrawls_finish_date = Carbon::now();

                    $looler_money        = Looler_money::where('user_id', $withdrawal->user_id)->first();
                    $looler_money->money = $looler_money->money - $withdrawal->total_amount_request;
                    $looler_money->save();

                    $movement                   = new Movement;
                    $movement->looler_id        = $withdrawal->user_id;
                    $movement->movement_amount  = $withdrawal->total_amount_request;
                    $movement->type_movement_id = 2;
                    $movement->withdrawals_id =  $withdrawal->id;
                    $movement->save();

                }
            }
        }
        if ($withdrawal->manager == null) {
            $withdrawal->manager = Auth::user()->name;
            $withdrawal->save();
        }

        $withdrawal->save();
        return $withdrawal->state_withdrawals_id;

    }

    public function sendMail(Request $request)
    {
        $user = User::find($request->user_id);

        if ($request->state == 2) {
            $subject = 'Solicitud de retiro en proceso';
            $mensaje = 'Hemos recibido la solicitud para retirar tu dinero, Nuestro equipo verificará la información para terminar con éxito este proceso.';
            $data    = ['user_id' => $user->id, 'message' => 'Solicitud de retiro en proceso, Nuestro equipo verificará la información para terminar con éxito este proceso.', 'type_notification_id' => 3];
            $this->createNotification($data);
        } else {
            if ($request->state == 3) {
                $subject = 'Solicitud de retiro aprobada';
                $mensaje = 'Hemos aprobado la solicitud para retirar tu dinero, te notificaremos cuando nuestro equipo haga el retiro a la cuenta que registraste para recibir tu dinero';
                $data    = ['user_id' => $user->id, 'message' => 'Solicitud de retiro aprobada, te notificaremos cuando se haga el retiro a tu cuenta', 'type_notification_id' => 3];
                $this->createNotification($data);
            } else {
                if ($request->state == 4) {
                    $subject = 'Solicitud de retiro finalizada';
                    $mensaje = '¡Felicidades! Ya tienes el dinero en tu cuenta, nuestro equipo ha finalizado la solicitud de retiro con éxito. ¡Sigamos creciendo juntos 💪!';
                    $data    = ['user_id' => $user->id, 'message' => 'Solicitud de retiro finalizada, Ya tienes el dinero en tu cuenta', 'type_notification_id' => 2,''];
                    $this->createNotification($data);
                }
            }
        }

        \Mail::to($user->email)->send(new AccountRegistered($mensaje, $subject, $user->username));

        return;
    }
    public function rejectMoneyRequest(Request $request){
        $withdrawal = Withdrawal::find($request->id);

   
        $withdrawal->state_withdrawals_id   = 5;
        $withdrawal->withdrawals_rejected_date = Carbon::now();
        
        if ($withdrawal->manager == null) {
            $withdrawal->manager = Auth::user()->name;
            $withdrawal->save();
        }

        $withdrawal->save();


    }

    public function aprovePost(Request $request)
    {

        $post                = Post::find($request->post_id);
        $post->post_state_id = 1;
        $post->save();

        $data = ['user_id' => Auth::user()->id, 'message' => 'Publicación aprobada','post_id' => $post->id];
        $this->createLog($data);
        $data = ['user_id' => $post->user->id, 'message' => 'Su publicación fue revisada y aprobada', 'type_notification_id' => 4];
        $this->createNotification($data);
        return;
    }
    public function sendMailAprovePost(Request $request)
    {
        
        $user    = User::find($request->user_id);
    
        $subject = 'Publicación aprobada';
        $mensaje = '¡Felicidades! Su publicación fue revisada y aprobada';
        \Mail::to($user->email)->send(new AccountRegistered($mensaje, $subject, $user->username));
        return;
    }


    public function getContentPublication(Request $request){
        $post = Post::find($request->post_id);
        $contents = Post_file::where('post_id', $request->post_id)->get();
        $data=[
            'user_id' =>  $post->user_id,
            'contents' => $contents,
            'status' => $post->post_state_id
        ];
        return $data;

    }

    public function rechazarPulicacion(Request $request){
        $post                = Post::find($request->post_id);
        $post->post_state_id = 3;
        $post->save();

        $data = ['user_id' => Auth::user()->id, 'message' => 'Publicación recahzada:'.' '.$request->motivo,'post_id' => $post->id];
        $this->createLog($data);

        $user    = User::find($request->user_id);
    
        $subject = 'Publicación rechazada';
        $mensaje = ' Su publicación fue rechazada, por las siguientes razones:'.' '.$request->motivo;
        \Mail::to($user->email)->send(new AccountRegistered($mensaje, $subject, $user->username));

        $data    = ['user_id' => $user->id, 'message' => 'Su publicación fue rechazada, por las siguientes razones:'.' '.$request->motivo, 'type_notification_id' => 5];
        $this->createNotification($data);
        return;
    }

    public function getLog($id){
        $logs = Logs::where('post_id',$id)->with('user')->get();
        return $logs;
    }
}
