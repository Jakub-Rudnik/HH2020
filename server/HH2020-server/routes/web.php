<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/api', function () {
    $data=["Czy_dziala"=>1];
    return response()->json($data,200);
});

Route::get("/api/1",function(){
    return response("Dziala",200);
});