<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class PagesController extends Controller
{
    public function home(){
        return Inertia::render('Posts/Home');
    }
    
    public function CheckRegistration(Request $request){
        $user = User::where('group_code', $request->input('code'))->first();
        
        if($user){
            return Inertia::render($user->progress);
        }else{
            echo "<pre>";
            print_r($user);
            echo "</pre>";
        }
    }

    public function FormPendaftaran() {
        return Inertia::render('FormPendaftaran');
    }
    public function about(){
        return Inertia::render('Posts/AboutUs');
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
