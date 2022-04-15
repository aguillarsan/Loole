<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\Hash;


Route::get('/pass/{pass}',function($pass){
    
      return Hash::make($pass);
});



Route::get('/is-available-user-name', 'Auth\LoginController@isAvailableUserName');
Route::get('/validate-email-form', 'Auth\LoginController@validarEmail');
Route::get('/validate-rut-form', 'Auth\LoginController@validarDni');
Route::get('/user-data-login-check', 'Auth\LoginController@UserDataCheck');
Route::get('/signup', 'LoolerRegistrerController@index');

Route::post('/register/suscriptor','LoolerRegistrerController@registerSuscriptor');
Route::get('/form/data','LoolerRegistrerController@getFormData');
Route::post('/auth/singup/register/looler','LoolerRegistrerController@registerLooler');

Route::post('/authenticate/logout', 'Auth\LoginController@logout');
Route::post('/authenticate/login', 'Auth\LoginController@login');

Route::post('/webhooks','WebhooksController');

Route::get('/remote/addr',function(){
    $ip = $_SERVER['REMOTE_ADDR'];
    return $ip;
});

Route::get('/authUser',function(){
  if(Auth::check()){
      return true;
  }else{
      return false;
  }
});

route::middleware('auth')->group(function () {
    Route::get('/authenticate/getRefrescarUsuarioAutenticado', function () {
        return Auth::user()->load(["country","gender"]);
    });

Route::post('/profile/get-total-post-img-video-sales', 'PostController@getTotal');

//  ########################### RUTAS POST-LOOLER ###########################
Route::get('/publish', 'PostController@uploadPostView');
Route::post('/upload-post', 'PostController@uploadPost');
Route::get('/get-all-post-profile-looler', 'PostController@getPostProfileLooler');
Route::get('/get-all-images-profile-looler', 'PostController@getImagesPostProfileLooler');
Route::get('/get-all-video-profile-looler', 'PostController@getVideosPostProfileLooler');
//  ########################### RUTAS FAQ ###########################
Route::get('/faqs/data', 'FaqController@getFaqs');

//#################################################################################
Route::get('/get-all-post-profile-looler-suscriptor-watch', 'DetailProfileLoolerController@getPostProfileLoolerSuscriptorWatch');
Route::get('/get-all-post-video-profile-looler-suscriptor-watch', 'DetailProfileLoolerController@getPostProfileLoolerVideoSuscriptorWatch');
Route::post('/looler-info-profile', 'PostController@loolerInfo');
Route::get('/purchase/detail', 'MercadoPagoController@index');
Route::get('/successBuyPost/{order}', 'MercadoPagoController@successBuyPost')->name('successBuy');
Route::get('/errorPurchase', 'MercadoPagoController@errorPurchase')->name('errorBuy');

//#################################################################################
//########################### RUTAS POST-HOME ###########################
Route::get('/home/post/get-all-post', 'PostController@getAllPost');
Route::post('/report-post', 'PostController@reporPost');
Route::post('/email-notification-report', 'MailController@reporPost');
/// ########################### RUTES ACCOUNT ACCOUNT #########################
Route::post('/user/register/account', 'AccountController@registerAccount');
Route::post('/deleteAccount','UserController@deleteAccount');
Route::get('/account/data/looler','AccountController@getAccountData');
// ################################################################################

Route::get('/user/collection/data','CollectionController@getCollections');
 // ########################### RUTAS WITHDRAWALS ###########################
 Route::get('/balance/looler/withdrawals', 'CollectController@getSaldo');

 Route::post('/withdrawals/looler/wallet', 'CollectController@registerWithdrawal');
//#################################################################################
// ########################### RUTES RETIREMENT STATUS #########################
Route::get('/money/order/status/{order}', 'RetirementStatusController@index');
// #################################################################################

Route::get('/search/looler/get','UserController@getAllLoolers');
Route::get('/notifications/user','NotificationController@getNotificzationsUser');
Route::post('/updateNotifiaction','NotificationController@updateNotifiaction');
Route::get('/notification/status/user','NotificationController@getNotificzationsActiveUser');
    // ########################### RUTAS LIKE POST ###########################
    Route::get('/wallet/data/movements', 'MovementsController@getMovements');
    Route::get('/wallet/list/movements', 'MovementsController@getAllMovements');

    // ########################### RUTAS MODULO PERFIL  ###########################
    Route::get('user-get-data', 'UserController@getDataUser');
    Route::post('/update-img-profile-user', 'UserController@updateImageProfile');
    Route::get('/is-available-username', 'UserController@checkIsAvailableUsername');
    Route::get('/check-is-available-email', 'UserController@checkIsAvailableEmail');
    Route::get('/update-user-data-profile', 'UserController@updateDataProfileUser');
  
    Route::get('/get-status-account', 'UserController@getStatusAccount');
    Route::get('/get-data-looler', 'UserController@getDataProfileLooler');
    Route::get('/profile', 'UserController@getProfile');
    Route::get('/verify-password-actualy', 'UserController@verifyPasswordActualy');
    Route::post('/setting/change/old/password', 'UserController@changePassword');
    Route::post('/suspendAccount', 'UserController@suspendAccount');
    Route::post('/delete-post', 'PostController@deletePost');
    Route::post('/edit-desc-post', 'PostController@editDescriptionPost');
    Route::post('/profile/check/password','UserController@verifyPasswordActualy');
    Route::post('/check/profile/username/exist','UserController@verifyUserExist');
    Route::post('/edit/profile/img','UserController@updateImageProfile');
    Route::post('/user/edit/profile/data/personal','UserController@updateDataLooler');

    Route::get('/post/user/view/home','PostController@getPostUserView');
    //  ########################### RUTAS ADMIN ###########################
    Route::get('/loole-admin-site', 'AdminController@index')->name('loole-admin-site');
    Route::get('/get-cuentas-usuarios-revision', 'AdminController@getCuentasPendientes');
    Route::post('/get-image-dni', 'AdminController@getImageDni');
    Route::post('/approve-account-looler', 'AdminController@approveAccountLooler');
    Route::post('/deny-account-looler', 'AdminController@denyAccountLooler');
    Route::get('/request-money','AdminController@requestMoney');
    Route::get('/data-request-money','AdminController@getMoneyRequest');
    Route::post('/update-witdrals','AdminController@updateWithdrals');
    Route::post('/send-mail-new','AdminController@sendMail');
    Route::get('/post-revision','AdminController@postRevision');
    Route::get('/get-post-revision','AdminController@getPostRevision');
    Route::post('/aprove-post','AdminController@aprovePost');
    Route::post('/email-aprove-post','AdminController@sendMailAprovePost');
    Route::get('/publication/content/detail/','AdminController@getContentPublication');
    Route::post('/publication/denny','AdminController@rechazarPulicacion');
    Route::get('/ /log/publicaction/{id}','AdminController@getLog');
    Route::get('/reject/money/request','AdminController@rejectMoneyRequest');
   
    //#################################################################################

});
Route::get('/{optional?}', function () {
    return view('app.app');
})->name('basepath')->where('optional', '.*');
