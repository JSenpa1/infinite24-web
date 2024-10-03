<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controller;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\KodePosController;
use App\Http\Controllers\Pos2Part2Controller;
use App\Http\Controllers\Pos4Controller;
use App\Http\Controllers\Pos2Part1Controller;
use App\Http\Controllers\GroupCodeController;
use App\Http\Controllers\Pos1Controller;
use App\Http\Controllers\Pos3Controller;
use App\Http\Controllers\PesertaController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/mid', [TicketController::class, 'midTrans']);
Route::post('/call-back', [TicketController::class, 'callBack']);
// Route::get('/auth', [KodePosController::class, 'getAuth']);

// Route::get('/checkKodePos', [KodePosController::class, 'getKodePos']);
// Route::get('/checkJawabanPos2Part1', [Pos2Part1Controller::class, 'checkJawaban']);
// Route::get('/checkJawabanPos2Part2', [Pos2Part2Controller::class, 'checkJawaban']);

// Route::get('/checkJawabanPos4', [Pos4Controller::class, 'checkJawaban']);
// Route::get('/checkKodeGrup', [GroupCodeController::class, 'checkKodeGrup']);

// Route::get('/checkJawabanPos1', [Pos1Controller::class, 'checkJawaban']);
// Route::get('/checkJawabanPos3', [Pos3Controller::class, 'checkJawaban']);
// Route::get('/fetchClockPos3', [Pos3Controller::class, 'fetchClock']);

Route::get('/inputPeserta', [PesertaController::class, 'inputPeserta']);
Route::get('/updateRegis', [PesertaController::class, 'updateRegis']);
