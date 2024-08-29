<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class PagesController extends Controller
{
    public function home(){
        return Inertia::render('Posts/Welcome');
    }
    // public function home(){
    //     return Inertia::render('Posts/Home');
    // }
    // public function home(){
    //     return Inertia::render('Posts/Home');
    // }
    // public function home(){
    //     return Inertia::render('Posts/Home');
    // } (Untuk Pages lainnya)
}
