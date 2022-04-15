<?php

namespace App\Http\Controllers;

use App\Rates;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RateController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        if (Auth::user()->username != null) {
            $name = Auth::user()->username;
        } else {
            if (Auth::user()->name != null) {
                $name = Auth::user()->name;
            }
        }
        return view('user.rate', compact('name'));
    }

    public function registerRateUser(Request $request)
    {
        $rate          = new Rates;
        $rate->user_id = Auth::user()->id;
        $rate->rate_description = $request->rate_description;
        $rate->rate_value       = $request->rate_value;
        $rate->save();
        return;
    }

}
