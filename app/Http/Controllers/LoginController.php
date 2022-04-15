<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $email = $request->email;
        $password = $request->password;
        $login =  Auth::attempt(['email' => $email, 'password' => $password]);
        if ($login) {
           
            return response()->json([
                'authUser' => Auth::user(),
                'code' => 200
            ]);
        } else {
            return response()->json([

                'code' => 401
            ]);
        }
    }
    public function logout()
    {
        
        Auth::logout();
    }

   
}
