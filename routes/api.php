<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controller;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\KodePosController;
use App\Http\Controllers\Pos2Part2Controller;
use App\Http\Controllers\Pos4Controller;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/mid', [TicketController::class, 'midTrans']);
Route::get('/auth', [KodePosController::class, 'getAuth']);

Route::get('/checkKodePos', [KodePosController::class, 'getKodePos']);

Route::get('/checkJawabanPos2Part2', [Pos2Part2Controller::class, 'checkJawaban']);

Route::get('/checkJawabanPos4', [Pos4Controller::class, 'checkJawaban']);
