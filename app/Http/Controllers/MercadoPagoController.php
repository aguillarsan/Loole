<?php

namespace App\Http\Controllers;

use App\Events\BuyPostEvent;
use App\Http\Traits\NotificationTrait;
use App\Looler_money;
use App\Movement;
use App\Order;
use App\Post;
use App\Post_buyed;
use App\Post_file;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MercadoPagoController extends Controller
{
    use NotificationTrait;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index(Request $request)
    {

        
        require base_path('/vendor/autoload.php');
      
        $post = Post::where('post_key',$request->item)->first();
      
        \MercadoPago\SDK::setAccessToken(config('services.mercadopago.access_token'));

        $preference = new \MercadoPago\Preference();

        $item              = new \MercadoPago\Item();
        $item->title       = 'Loole - ' . $post->user->username;
        $item->description = 'Compra de contenido';
        $item->quantity    = 1;
        $item->unit_price  = $post->price;
        $item->currency_id = "CLP";

        $preference->items = array($item);

        // $tax               = new \MercadoPago\Tax();
        // $tax->value        = 200;
        // $tax->type         = "Costos por servicio";

        $payer             = new \MercadoPago\Payer();
        $payer->name       = Auth::user()->name;
        $payer->email      = Auth::user()->email;
        $preference->payer = $payer;

        // GENERAR ORDEN BD
        $order           = new Order;
        $order->order_nr = date('ymd') . str_pad(mt_rand(0, 99999999), 9, '0', STR_PAD_LEFT);
        $order->price    = $post->price;
        $order->status   = 1;
        $order->user_id  = Auth::user()->id;
        $order->post_id  = $post->id;
        $order->save();

        $preference->back_urls = array(
            "success" => route('successBuy', $order),
            "failure" => route('errorBuy'),
            "pending" => "http://misistema.test/checkout/pending",
        );

        $images = Post_file::whereIn(
            'post_id',
            Post::where('id', $post->id)->where('post_state_id',1)->pluck('id')
        )->count('image');
        $videos = Post_file::whereIn(
            'post_id',
            Post::where('id', $post->id)->where('post_state_id',1)->pluck('id')
        )->count('video');

        $preference->auto_return = "approved";

        $preference->save();

        return view('MercadoPago.Detail', compact('preference', 'post','images','videos'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function successBuyPost(Request $request, $order)
    {
        $payment_id = $request->payment_id;

        $access_token = config('services.mercadopago.access_token');

        $response = \Http::get("https://api.mercadopago.com/v1/payments/$payment_id" . "?access_token=$access_token");

        $response = json_decode($response);

        if ($response->status == 'approved') {

            $order_up = Order::find($order);
            if ($order_up->status == 1) {
                $order_up->status         = 2;
                $order_up->method_payment = $request->payment_type;
                
                $order_up->save();

                $post_buyed          = new Post_buyed;
                $post_buyed->user_id = Auth::user()->id;
                $post_buyed->post_id = $order_up->post_id;
                $post_buyed->save();

                $looler_money = Looler_money::where('user_id', $order_up->post->user_id)->count();
                if ($looler_money == 0) {
                    $looler_money          = new Looler_money;
                    $looler_money->user_id = $order_up->post->user_id;
                    $looler_money->money   = $order_up->post->price;
                    $looler_money->save();
                } else {

                    $looler_money = Looler_money::where('user_id', $order_up->post->user_id)->get();
                    foreach ($looler_money as $looler) {
                        $id = $looler->id;
                    }

                    $looler_money = Looler_money::find($id);

                    $looler_money->money = $looler_money->money + $order_up->post->price;
                    $looler_money->save();
                }

                $movement                   = new Movement;
                $movement->post_id          = $order_up->post->id;
                $movement->movement_amount  = $order_up->post->price;
                $movement->looler_id        = $order_up->post->user_id;
                $movement->type_movement_id = 1;
                $movement->suscriptor_id    = Auth::user()->id;
                $movement->save();

                event(new BuyPostEvent($post_buyed));
                $message =  'Un fan a comprado tu contenido de '. number_format($order_up->post->price, 0, ',', '.'). ' CLP ';
                $data    = ['user_id' => $order_up->post->user_id, 'message' => $message, 'type_notification_id' => 1];
                $this->createNotification($data);
                 return redirect('/Collection');
            }else{
                 return redirect('/Collection');
            }

        }

       




    }


    public function errorPurchase(){
        return view('MercadoPago.ErrorPayment');
    }

    
}
