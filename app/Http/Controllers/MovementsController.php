<?php

namespace App\Http\Controllers;

use App\Looler_money;
use App\Movement;
use App\Withdrawal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MovementsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct()
    {
        $this->middleware('auth');
    }
    public function getMovements()
    {
        $money = Looler_money::where('user_id', Auth::user()->id)->get(['money']);

        if (Auth::user()->role_id == 2) {

            $any_movements = Movement::where('looler_id', Auth::user()->id)->first() ? true : false;

            $exist_account       = Auth::user()->account_id ? true : false;
            $withdrawals_request = Withdrawal::where('user_id', Auth::user()->id)->whereIn('state_withdrawals_id', [1,2,3])->first();

            

        } else {
            if (Auth::user()->role_id == 3) {

                $any_movements = Movement::where('suscriptor_id', Auth::user()->id)->count() == 1 ? true : false;

                $exist_account = false;

                $withdrawals_request = null;

            }
        }

        $data = [
            'rol_id'              => Auth::user()->role_id,
            'money'               => $money,
            'any_movements'       => $any_movements,
            'withdrawals_request' => $withdrawals_request,
            'exist_account'       => $exist_account,
        ];
        return $data;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAllMovements()
    {
        if (Auth::user()->role_id == 2) {
            $movements = \DB::table('movements as m')
                ->join('users as l', 'l.id', '=', 'm.looler_id')
                ->leftJoin('users as s', 's.id', '=', 'm.suscriptor_id')
                ->join('type_movements as o', 'o.id', '=', 'm.type_movement_id')

                ->select('m.id', 'm.created_at', 'm.type_movement_id', 'o.type_movement', 's.profile_image as suscriptorimg', 'l.profile_image as loolerimg', 'm.movement_amount','m.withdrawals_id')
                ->where('looler_id', Auth::user()->id)->orderBy('m.id', 'DESC')->paginate(10);

        } else {
            if (Auth::user()->role_id == 3) {
                $movements = \DB::table('movements as m')
                    ->join('users as l', 'l.id', '=', 'm.looler_id')

                    ->join('type_movements as o', 'o.id', '=', 'm.type_movement_id')

                    ->select('m.id', 'm.created_at', 'm.type_movement_id', 'o.type_movement', 'l.profile_image', 'm.movement_amount')
                    ->where('suscriptor_id', Auth::user()->id)->orderBy('m.id', 'DESC')->paginate(10);

            }
        }

        return $movements;
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
