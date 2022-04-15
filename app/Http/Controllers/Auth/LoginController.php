<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Jobs\checkAddr;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
class LoginController extends Controller
{
    use AuthenticatesUsers;

    public function login(Request $request)
    {
        $email    = $request->email;
        $password = $request->password;
        $login    = Auth::attempt(['email' => $email, 'password' => $password]);
        if ($login) {
            if (Auth::user()->status_id == 5) {
                Auth::logout();
                return response()->json([

                    'code' => 500,
                ]);
            } else {

                if (Auth::user()->status_id == 4) {
                    $user            = Auth::user();
                    $user->status_id = 3;
                    $user->save();
                }
                $this->guard()->login(Auth::user());
                // dispatch(new checkAddr());

                return response()->json([
                    'authUser' => Auth::user(),
                    'code'     => 200,
                ]);

            }

        } else {
            return response()->json([

                'code' => 401,
            ]);
        }
    }
    public function logout()
    {
        $user            = Auth::user();
        $user->last_conection_at = Carbon::now();
        $user->save();
        Auth::logout();
        return response()->json([

            'code' => 200,
        ]);
    }

    public function UserDataCheck(Request $request)
    {

        if (Auth::attempt(["email" => $request->email, "password" => $request->password])) {
            return 1;

        } else {
            return 2;

        }

    }

    public function validarDni(Request $request)
    {
        try {
            $user = User::where('dni', '=', $request->dni)->first();
            if ($user) {
                return true;
            } else {
                if (!$user) {
                    return false;
                }
            }
        } catch (Exception $e) {
            return $e;
        }
    }

    public function validarEmail(Request $request)
    {
        try {
            $user = User::where('email', '=', $request->email)->first();
            if ($user) {
                return true;
            } else {
                if (!$user) {
                    return false;
                }
            }
        } catch (Exception $e) {
            return $e;
        }

    }

    public function isAvailableUserName(Request $request)
    {
        try {
            if (Auth::check()) {
                $user_name = User::where('username', $request->user_name)->where('id', '!=', Auth::user()->id)->first();
                if ($user_name) {
                    return 1;
                } else {
                    if (!$user_name) {
                        return 2;
                    }
                }
            } else {
                $user_name = User::where('username', $request->user_name)->first();
                if ($user_name) {
                    return 1;
                } else {
                    if (!$user_name) {
                        return 2;
                    }
                }
            }

        } catch (Exception $e) {
            return $e;
        }

    }
}
