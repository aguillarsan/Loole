<?php

namespace App\Http\Controllers;

use App\Looler_money;
use App\Withdrawal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CollectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $money = Looler_money::where('user_id', Auth::user()->id)->get(['money']);
        return view('user.collect', compact('money'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getSaldo()
    {
        $money = Looler_money::where('user_id', Auth::user()->id)->get(['money']);
        foreach ($money as $m) {
            $money_looler = $m->money;
        }

        return $money_looler;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function registerWithdrawal(Request $request)
    {
        try{
            $withdrawal                       = new Withdrawal;
            $withdrawal->user_id              = Auth::user()->id;
            $withdrawal->amount               = $request->amount;
            $withdrawal->percent              = $request->percent;
            $withdrawal->state_withdrawals_id = 1;
            $withdrawal->total_amount_request = $request->total_amount_retirement;
            $withdrawal->save();
            return response()->json([
               
                'code' => 200
            ]);
        }catch(Exception $e){
            return response()->json([
               
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
