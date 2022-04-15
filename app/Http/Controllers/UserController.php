<?php

namespace App\Http\Controllers;


use App\Mail\AccountRegistered;
use App\Post;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Image;

class UserController extends Controller
{

    
    public function __construct()
    {
        $this->middleware('auth');
    }

    

    public function gettag(Request $request)
    {

        $tag = md5($request->username . $request->email);
        return $tag;
    }

    public function getAllLoolers(Request $request){
        $loolers = User::Search()->where('role_id',2)->where('status_id', 3)->orderby('id','desc')->paginate(10,['username','profile_image','real_profile_img']);
        return $loolers;
    }

    public function getStatusAccount()
    {
        $user = User::find(Auth::user()->id);

        return $user->status_id;
    }

    public function verifyPasswordActualy(Request $request)
    {
        if (\Hash::check($request->password, Auth::user()->password)) {
            return true;
        } else {
            return false;
        }
    }

    public function updateMenu(Request $request)
    {
        $user       = User::find(Auth::user()->id);
        $user->menu = $request->menu;
        $user->save();
        return;
    }

    public function getProfile()
    {

        if (Auth::user()->role_id == 2) {
            $user       = User::where('id', Auth::user()->id)->with('gender', 'country','post_buy')->first();
            $total_post = Post::where('user_id', Auth::user()->id)->count();
            $data       = [
                'user'       => $user,
                'total_post' => $total_post,
            ];
        } else {
            if (Auth::user()->role_id == 3) {
                $user       = User::where('id', Auth::user()->id)->with('gender', 'country')->first();
                $total_post = null;
                $data       = [
                    'user'       => $user,
                    'total_post' => $total_post,
                ];

            }
        }

        return view('user.profile', compact('data'));
    }

    public function checkIsAvailableUsername(Request $request)
    {
        try {
            $user_name = User::where('id', '!=', Auth::user()->id)->where('username', $request->user_name)->first();
            if ($user_name) {
                return true;
            } else {
                if (!$user_name) {
                    return false;
                }
            }
        } catch (Exception $e) {
            return $e;
        }

    }

    
    public function suspendAccount()
    {
        $user            = User::find(Auth::user()->id);
        $user->status_id = 4;
        $user->save();

        $username = Auth::user()->username;
        $mensaje  = 'Tu cuenta fue suspendida exitosamente.';
        $subject  = 'Cuenta suspendida';
        \Mail::to(Auth::user()->email)->send(new AccountRegistered($mensaje, $subject, $username));

        Auth::logout();
        return;
    }

    public function deleteAccount(){
        $user            = User::find(Auth::user()->id);
        $user->status_id = 5;
        $user->save();

        $username = Auth::user()->username;
        $mensaje  = 'Tu cuenta fue eliminada exitosamente.';
        $subject  = 'Cuenta eliminada';
        \Mail::to(Auth::user()->email)->send(new AccountRegistered($mensaje, $subject, $username));

        Auth::logout();
        return;
    }
    public function checkIsAvailableEmail(Request $request)
    {
        try {
            $user_name = User::where('id', '!=', Auth::user()->id)->where('email', $request->email)->first();
            if ($user_name) {
                return true;
            } else {
                if (!$user_name) {
                    return false;
                }
            }
        } catch (Exception $e) {
            return $e;
        }

    }
    public function changePassword(Request $request)
    {
        if (\Hash::check($request->old_password, Auth::user()->password)) {

            $user = Auth::user();
            $user->update([
                'password' => Hash::make($request->new_password),
            ]);

            return true;

        } else {
            return false;
        }

    }

    public function verifyUserExist(Request $request){
        $user = User::where('username',$request->usr_name)->where('status_id',3)->first();
        
              if( $user){
                return response()->json([
                     'looler_id' => $user,
                    'code' => 200
                ]);
              }else{
                return response()->json([

                    'code' => 401
                ]);
              }
    }
    public function updateDataProfileUser(Request $request)
    {
        try {
            $user           = User::find($request->user_id);
            $user->username = $request->username;
            $user->email    = $request->email;
            $user->save();
            return;
        } catch (Exception $e) {
            return $e;
        }

    }
    public function updateDataLooler(Request $request)
    {
        try {
            $user = User::find(Auth::user()->id);
            if ($request->description != null) {
                $user->description = $request->description;
            }

           
            $user->username = $request->username;
            $user->name = $request->name;
            

            $user->save();
            return response()->json([
              
               'code' => 200
           ]);
        } catch (Exception $e) {
            return response()->json([
                
               'code' => 401
           ]);
        }
    }
    public function getDataUser()
    {

        $user = User::where('id', Auth::user()->id)->with('gender', 'country','post_buy')->first();
        return response()->json($user);
    }
    public function getDataProfileLooler()
    {

        $user = User::where('id', Auth::user()->id)->with('gender', 'country','post_buy')->first();

        $data = [
            'user' => $user,

        ];

        return $data;
    }

    public function updateImageProfile(Request $request)
    {
        try {
            // ########################## COMPROBAR SI EL DIRECOTRIO DEL USUARIO ESTA CREADO ##########################
            if(Auth::user()->role_id == 2){
                $principal_path = 'loolers/' .md5(Auth::user()->id . Auth::user()->user_tag);
                if (!file_exists($principal_path)) {
                    \File::makeDirectory($principal_path);
                }
                // ##############################################################################
    
                // ##########################  COMPROBAR SI EL DIRECOTRIO PROFILE IMAGES ESTA CREADO ##########################
                $path = 'loolers/' . md5(Auth::user()->id . Auth::user()->user_tag) . '/profile_image';
    
                if (!file_exists($path)) {
                    \File::makeDirectory($path);
                }
                // ##############################################################################
    
                // ############# BORRAR IMAGEN DE PERFIL ANTIGUA ################################
                $path_files_delete = 'loolers/' . md5(Auth::user()->id . Auth::user()->user_tag) . '/profile_image';
                $handle            = opendir($path_files_delete);
                while ($file = readdir($handle)) {
                    if (is_file($path_files_delete . $file)) {unlink($path_files_delete . $file);}
    
                }
            }else{
                $principal_path = 'suscriptors/' .md5(Auth::user()->id . Auth::user()->user_tag);
                if (!file_exists($principal_path)) {
                    \File::makeDirectory($principal_path);
                }
                $path = 'suscriptors/' . md5(Auth::user()->id . Auth::user()->user_tag) . '/profile_image';
    
                if (!file_exists($path)) {
                    \File::makeDirectory($path);
                }
                $path_files_delete = 'suscriptors/' . md5(Auth::user()->id . Auth::user()->user_tag) . '/profile_image';
                $handle            = opendir($path_files_delete);
                while ($file = readdir($handle)) {
                    if (is_file($path_files_delete . $file)) {unlink($path_files_delete . $file);}
    
                }
            }
           
            // ##############################################################################
            // ############# REDIMENSIONAR IMAGEN MIN  ##########################
            $img = $request->profile_img_rezise;

            $filename     = $img->getClientOriginalName();
            $image_resize = Image::make($request->profile_img_rezise->getRealPath())->orientate();
            $image_resize->fit(180, null, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
            $image_resize->save(public_path($path . '/' . md5( $filename)));
            // ############# IMAGEN REAL  ##########################
                 $img = $request->profile_img_real;

                 $filename     = $img->getClientOriginalName();
                 $image_resize = Image::make($request->profile_img_real->getRealPath())->orientate();
               
                 $image_resize->save(public_path($path . '/' . md5($filename.Auth::user()->user_tag)));

            // ############# ACTUALIZAR Y CARGAR IMAGEN DE PERFIL  ##########################


            $user                = User::find(Auth::user()->id);
            $user->profile_image = '/' . $path . '/' . md5( $filename);
            $user->real_profile_img = '/' . $path . '/' . md5( $filename.Auth::user()->user_tag);
            $user->save();

           
            return response()->json([
             
               'code' => 200
           ]);

            // ##############################################################################

        } catch (Exception $e) {
            return $e;
        }

    }

}
