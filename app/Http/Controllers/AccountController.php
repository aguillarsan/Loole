<?php

namespace App\Http\Controllers;

use App\Account;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function registerAccount(Request $request)
    {
        try{
            $account                  = new Account;
            $account->bank_id         = $request->bank_id;
            $account->type_account_id = $request->type_account_id;
            $account->number_account  = $request->number_account;
            $account->method_id       = $request->method_select_id;
            $account->save();
    
            $user = User::find(Auth::user()->id);
            $user->account_id = $account->id;
            $user->save();
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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAccountData()
    {
        $account                  = Account::find(Auth::user()->account_id);
        return $account;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
