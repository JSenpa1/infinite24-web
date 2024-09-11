<?php

use App\Http\Controllers\PagesController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [PagesController::class, 'home'])->name('home');

// Route::get('/game', function (){
//     return Inertia::render('Game/Index', [
//         'error' => session('error'),
//     ]);
// });

Route::get('/game', [PagesController::class, 'CheckUser'])->name('check-user');

Route::post('/game/check-status', [PagesController::class, 'CheckRegistration'])->name('check-registration');

Route::post('/game/{id}/confirmation', [PagesController::class, 'CheckAnswer'])->name('check-answer');
// Route::post('game/{id}/confirmation', function (){
//     return Inertia::render('Game/InputCode');
// });

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
