<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UsersxController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




Route::get('login',[UsersxController::class,'login']);

Route::post('logins',[UsersxController::class,'logins']);

Route::post('register',[UsersxController::class,'register']);

Route::post('updatename',[UsersxController::class,'updatename']);


Route::post('send',[UsersxController::class,'send']);



Route::get('conv',[UsersxController::class,'conv']);

Route::post('singleconv',[UsersxController::class,'singleconv']);





