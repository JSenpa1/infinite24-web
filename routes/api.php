<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controller;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\KodePosController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/mid', [TicketController::class, 'midTrans']);
Route::get('/auth', [KodePosController::class, 'getAuth']);

Route::get('/checkKodePos', [KodePosController::class, 'getKodePos']);
