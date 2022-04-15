<?php

namespace App\Http\Controllers;

use App\Notification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getNotification()
    {
        return view('user.notification');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getNotificzationsUser()
    {
        $notifications = Notification::with('user', 'type_notification')->orderBy('id', 'DESC')->where('user_id', Auth::user()->id)->paginate(10);
        return $notifications;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateNotifiaction(Request $request)
    {
        $notification         = Notification::find($request->notification_id);
        $notification->active = $request->active;
        $notification->save();
        $any_active = Notification::where('active', 1)->where('user_id', Auth::user()->id)->count();
        return $any_active;
    }

    public function getNotificzationsActiveUser()
    {
        $any_active = Notification::where('active', 1)->where('user_id', Auth::user()->id)->count();
        return $any_active;
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
