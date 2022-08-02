<?php

namespace App\Http\Controllers;

use App\Country;
use App\Files;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Mail\AccountRegistered;
use Illuminate\Support\Facades\Auth;
use App\Gender;

class LoolerRegistrerController extends Controller
{
    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function index()
    {
        $countries = Country::get(['id', 'country']);

        return view('auth.loolerRegister', compact('countries'));
    }
    public function getFormData()
    {
        $countries = Country::get(['id', 'country']);
        $gender = Gender::get();
        $data = [
            'countries' => $countries,
            'gender' =>  $gender,

        ];
        return $data;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function generateUserName($name)
    {
        $number = mt_rand() . "\n";
        $username = substr($name, 0, 1) . $number;
        $userNameCheck = User::where('username', $username)->first() ? true : false;
        if ($userNameCheck) {
            return $this->generateUserName($name);
        } else {
            return  $username;
        }
    }
    public function registerSuscriptor(Request $request)
    {
        $username =   uniqid();
        $user                = new User;
        $user->name          = $request->name;
        $user->email         = $request->email;
        $user->password      = Hash::make($request->password);
        $user->profile_image = '/user_icon_default/default.svg';
        $user->role_id       = 3;
        $user->status_id     = 3;
        $user->provider_id   = null;
        $user->provider      = null;
        $user->user_tag      = md5($request->username . $request->email);
        $user->username = $username;
        $user->save();
        $path_suscriptors     = 'suscriptors/' . md5($user->id . $user->user_tag);
        $pathImage       = $path_suscriptors . '/profile_image';
        \File::makeDirectory($path_suscriptors);
        \File::makeDirectory($pathImage);
        $user = User::where('id', $user->id)->first();
        $this->guard()->login($user);
        return response()->json([
            'authUser' => Auth::user(),
            'code' => 200
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
 
    public function registerLooler(Request $request)
    {
        try {
            $user                = new User;
            $user->name          = $request->name;
            $user->email         = $request->email;
            $user->password      = Hash::make($request->password);
            $user->dni           = $request->dni;
            $user->gender_id     = $request->gender;
            $user->country_id    = $request->country;
            $user->status_id     = 1;
            $user->provider_id   = null;
            $user->provider      = null;
            $user->username      = $request->username;
            $user->menu          = 1;
            $user->profile_image = '/user_icon_default/default.svg';
            $user->role_id       = 2;
            $user->user_tag      = md5($request->username . $request->email);
            $user->rute          = $request->username;
            $user->save();
            $path_looler     = 'loolers/' . md5($user->id . $user->user_tag);
            $pathImage       = $path_looler . '/post_image';
            $pathVideo       = $path_looler . '/post_video';
            $path_looler_dni = $path_looler . '/fotos_cedula';
            $pathTumbail      = $path_looler . '/thumbails';
            \File::makeDirectory($path_looler);
            \File::makeDirectory($path_looler_dni);
            \File::makeDirectory($pathImage);
            \File::makeDirectory($pathVideo);
            \File::makeDirectory($pathTumbail);

            $cedula            = $request->cedula;
            $cedula_and_looler = $request->cedula_and_looler;

            if ($cedula) {

                $filename = $cedula->getClientOriginalName();

                $file             = new Files;
                $file->file_name  = $filename;
                $file->user_id    = $user->id;
                $file->path       = $path_looler_dni;
                $file->identified = 1;
                $file->save();
                $upload_success = $cedula->move($path_looler_dni, $filename);
            }
            if ($cedula_and_looler) {

                $filename = $cedula_and_looler->getClientOriginalName();

                $file             = new Files;
                $file->file_name  = $filename;
                $file->user_id    = $user->id;
                $file->path       = $path_looler_dni;
                $file->identified = 2;
                $file->save();
                $upload_success = $cedula_and_looler->move($path_looler_dni, $filename);
            }
            $user = User::where('id', $user->id)->first();
            $username = $user->usename;
            $mensaje = 'Nuestro equipo está verificando la información que nos entregaste, te notificaremos cuando tu cuenta esté disponible, mientras tanto te invitamos a conocer loole';
            $subject = 'Cuenta registrada';
            \Mail::to($request->email)->send(new AccountRegistered($mensaje, $subject, $username));

            $this->guard()->login($user);
            return response()->json([
                'authUser' => Auth::user(),
                'code' => 200
            ]);
        } catch (Exception $e) {
            return response()->json([
                'error' => $e,
                'code' => 401
            ]);
        }
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
