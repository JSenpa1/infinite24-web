<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Problem;

use function Ramsey\Uuid\v1;

class PagesController extends Controller
{
    public function home(){
        return Inertia::render('Posts/Home');
    }


    public function CheckUser(){
        if(session()->has('user')){
            $user = User::where('group_code', session('user'))->first();
            if(session()->has('error')){
                return Inertia::render($user->progress, [
                    'error' => session('error'),
                ]);
            }else{
                return Inertia::render($user->progress);
            }
        }else if(session()->has('error')){
            return Inertia::render('Game/Index', [
                'error' => session('error'),
            ]);
        }else{
            return Inertia::render('Game/Index');
        }
    }

    public function CheckRegistration(Request $request){
        $user = User::where('group_code', $request->input('code'))->first();

        if($user){
            session(['user' => $user->group_code]);
            return back();
        }else{
            session(['error' => 'Kode Invalid']);
            return back()->with('error', 'ERROR: Kode tidak dikenal.');
        }
    }

    public function CheckAnswer(Request $request, $id){
        switch($id){
            case 1:
                $answerkey = Problem::where('pos_id', $id)->get();
                $answerkey1 = json_decode($answerkey[0]->answer);
                $answerkey2 = json_decode($answerkey[1]->answer);

                $answer1 = [
                    $request->input('answer1a'),
                    $request->input('answer2a'),
                    $request->input('answer3a'),
                    $request->input('answer4a'),
                    $request->input('answer5a'),
                    $request->input('answer6a'),
                    $request->input('answer7a'),
                    $request->input('answer8a'),
                    $request->input('answer9a')
                ];

                $answer2 = [
                    $request->input('answer1b'),
                    $request->input('answer2b'),
                    $request->input('answer3b'),
                    $request->input('answer4b'),
                    $request->input('answer5b'),
                    $request->input('answer6b'),
                    $request->input('answer7b'),
                    $request->input('answer8b'),
                    $request->input('answer9b')
                ];

                $answer1 = array_map('intval', $answer1);
                $answer2 = array_map('intval', $answer2);

                $isAnswerWrong1 = false;
                $isAnswerWrong2 = false;

                for($i = 1; $i < 9; $i++){
                    if($answerkey1[$i] !== $answer1[$i]){
                        $isAnswerWrong1 = true;
                    }

                    if($answerkey2[$i] !== $answer2[$i]){
                        $isAnswerWrong2 = true;
                    }
                }

                if($isAnswerWrong1 && $isAnswerWrong2){
                    return back()->with('error', 'Jawaban Soal 1 & 2 Masih Kurang Tepat!');
                }else if($isAnswerWrong1){
                    return back()->with('error', 'Jawaban Soal 1 Masih Kurang Tepat!');
                }else if($isAnswerWrong2){
                    return back()->with('error', 'Jawaban Soal 2 Masih Kurang Tepat!');
                }

                break;
            case 2:
                break;
            case 3:
                break;
            default:
                break;
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
