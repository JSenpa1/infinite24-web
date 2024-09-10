<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class PagesController extends Controller
{
    public function home(){
        return Inertia::render('Posts/Welcome');
    }

    public function CheckRegistration(Request $request){
        $user = User::where('group_code', $request->input('code'))->first();

        if($user){
            return redirect($user->progress);
        }else{
            return back()->with('error', 'Kode invalid!');
            // return Inertia::render('Game/Index')->with('error', 'Kode invalid!'); 
        }
    }

    public function DisplayGamePage($id){
        // dd($id);
        switch($id){
            case 1:
                return Inertia::render('Game/Pos1');
                break;
            case 2:
                return Inertia::render('Game/Pos2');
                break;
            default:
                return 0;
        }
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
