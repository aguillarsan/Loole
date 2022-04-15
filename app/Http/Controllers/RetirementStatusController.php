<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Withdrawal;
use Illuminate\Support\Facades\Auth;
class RetirementStatusController extends Controller
{
    
    public function index($order)
    {
        $data = Withdrawal::where('user_id',Auth::user()->id)->where('id',$order)->first();
        return $data;
        
        
    }

  
}
