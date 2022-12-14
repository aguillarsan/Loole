<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Unauthorized'], 401);
        }

        $user        = Auth::user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token       = $tokenResult->token;

        $token->save();

        $response = response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type'   => 'Bearer',

        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json(['message' =>
            'Successfully logged out']);
    }
}
