<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KodePosController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/auth', [KodePosController::class, 'getAuth']);

Route::get('/checkKodePos', [KodePosController::class, 'getKodePos']);