<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\KodePos;
use App\Models\Pos1;
use App\Models\Pos2Part1;
use App\Models\Pos2Part2;
use App\Models\Pos3;
use App\Models\Pos4;
use function Ramsey\Uuid\v1;

class PagesController extends Controller
{
    public function home(){
        return Inertia::render('Posts/Home');
    }


    public function CheckUser(){
        if(session()->has('user')){
            $user = User::where('group_code', session('user'))->first();
            $data = $this->GatherData($user->progress);

            if(session()->has('error')){
                return Inertia::render($user->progress, [
                    'data' => $data,
                    'error' => session('error'),
                ]);
            }
            else if(session()->has('success')){
                return Inertia::render($user->progress, [
                    'data' => $data,
                    'success' => session('success'),
                ]);
            }
            else if(session()->has('alertCode')){
                return Inertia::render($user->progress, [
                    'data' => $data,
                    'alertCode' => session('alertCode'),
                ]);
            }

            else if($user->progress == 'Selesai') {
                return redirect('/');
            }

            else{
                return Inertia::render($user->progress, [
                    'data' => $data,
                ]);
            }
        }else if(session()->has('error')){
            return Inertia::render('Game/Index', [
                'error' => session('error'),
            ]);
        }else{
            return Inertia::render('Game/Index');
        }
    }

    public function GatherData($progress){
        switch($progress){
            case 'Game/Pos1':
                $data = Pos1::all();
                $arrayData = $data->toArray();
                return $arrayData;
                break;
            case 'Game/Pos3Part2':
                $user = User::where('group_code', session('user'))->first();
                $data = Pos3::where('id', $user->id)->get();

                $arrayData = $data->toArray();
                return $arrayData;
                break;
            case 'Game/Leaderboard':
                $user = User::where('group_code', session('user'))->first();
                $data = $user->time;
                return $data;
                break;
            default:
                break;
        }
    }

    public function registrationForm(){
        return Inertia::render('RegistrationForm');
    }

    // public function contacts() {
    //     return Inertia::render('Posts/Contact');
    // }

    public function CheckRegistration(Request $request){
        $user = User::where('group_code', $request->input('code'))->first();

        if($user){
            session(['user' => $user->group_code]);
            session(['start_time' => time()]);
            return back();
        }else{
            session(['error' => 'Kode Invalid']);
            return back()->with('error', 'ERROR: Kode tidak dikenal.');
        }
    }

    public function CheckUnlockCode(Request $request, $id)
    {
        $kode = KodePos::where('id', $id)->first();

        // Validate the input code against kode_akhir
        if (strtolower($request->input('code')) != $kode->kode_akhir) {
            return back()->with('error', 'ERROR: Kode tidak dikenal.');
        } else {
            $user = User::where('group_code', session('user'))->first();

            // Update progress to a temporary status for checkPergiCode
            // $user->progress = 'CheckPergiCode';
            // $user->save();

            // Redirect to the checkPergiCode page with the ID
            return Inertia::render('Game/InputCode2', [
                'id' => $id + 1,
            ]);
        }
    }

    public function checkPergiCode(Request $request, $id)
    {
        $kode = KodePos::where('id', $id)->first();

        // Validate the input code against kode_awal
        if (strtolower($request->input('code')) != $kode->kode_awal) {
            return back()->with('error', 'ERROR: Kode tidak dikenal.');
        } else {
            $user = User::where('group_code', session('user'))->first();

            // Update progress to the next game stage
            switch ($id) {
                case 1:
                    $user->progress = 'Game/Pos2Part1';
                    break;
                case 2:
                    $user->progress = 'Game/Pos3Part1';
                    break;
                case 3:
                    $user->progress = 'Game/Pos4Part1';
                    break;
                case 4:
                    $user->progress = 'Game/Pos5Part1';
                    break;
                default:
                    break;
            }
            $user->save();

            // Redirect to the updated game page
            return redirect('/game')->with('success', 'Berhasil membuka pos selanjutnya.');
        }
    }


    public function CheckAnswer(Request $request, $id){
        switch($id){
            case 11:
                $answerkey = Pos1::all();
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
                    $request->input('answer9b'),
                    $request->input('answer10b'),
                    $request->input('answer11b'),
                    $request->input('answer12b'),
                    $request->input('answer13b'),
                    $request->input('answer14b'),
                    $request->input('answer15b'),
                    $request->input('answer16b')
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
                }else{
                    return back()->with('success', true);
                }

                break;
            case 12:
                if($request->input('_token')){
                    return Inertia::render('Game/InputCode', [
                        'id' => 1,
                    ]);
                }else{
                    return redirect('/game');
                }
                break;
            case 21:
                $user = User::where('group_code', session('user'))->first();
                if($user->id <= 10){
                    $answerkey = Pos2Part1::where('id', 1)->first();
                }else{
                    if($user->id <= 20){
                        $answerkey = Pos2Part1::where('id', 2)->first();
                    }else{
                        $answerkey = Pos2Part1::where('id', 3)->first();
                    }
                }
                
                if($answerkey->answer != strtolower($request->input('code'))){
                    return back()->with('error', 'Jawaban Masih Kurang Tepat!');
                }else{
                    return back()->with('success', true);
                }

                break;
            case 22:
                $user = User::where('group_code', session('user'))->first();
                $user->progress = 'Game/Pos2Part2';
                $user->save();
                return redirect('/game');
                break;
            case 23:
                $answerkey = Pos2Part2::where('id', 1)->first();
                if($answerkey->answer != strtolower($request->input('code'))){
                    return back()->with('error', 'Jawaban Masih Kurang Tepat!');
                }else{
                    return back()->with('success', true);
                }
                break;
            case 24:
                if($request->input('_token')){
                    return Inertia::render('Game/InputCode', [
                        'id' => 2,
                    ]);
                }else{
                    return redirect('/game');
                }
                break;
            case 31:
                $user = User::where('group_code', session('user'))->first();
                $user->progress = 'Game/Pos3Part2';
                $user->save();
                return redirect('/game');
                break;
            case 32:
                if($request->input('_token')){
                    return Inertia::render('Game/InputCode', [
                        'id' => 3,
                    ]);
                }else{
                    return redirect('/game');
                }
                break;
            case 41:
                $user = User::where('group_code', session('user'))->first();
                $user->progress = 'Game/Pos4Part2';
                $user->save();
                return redirect('/game');
                break;
            case 42:
                $user = User::where('group_code', session('user'))->first();
                $answerkey = Pos4::where('id', 1)->first();
                if($answerkey->answer != strtolower($request->input('code'))){
                    return back()->with('error', 'Jawaban Masih Kurang Tepat!');
                }else{
                    return back()->with('success', true);
                }
                break;
            case 43:
                if($request->input('_token')){
                    return Inertia::render('Game/InputCode', [
                        'id' => 4,
                    ]);
                }else{
                    return redirect('/game');
                }
                break;
            case 51:
                $kode = KodePos::where('id', 5)->first();
                if($kode->kode_awal != strtolower($request->input('code'))){
                    return back()->with('error', 'ERROR: Kode tidak dikenal.');
                }else{
                    return back()->with('success', true);
                }
                break;
            case 52:
                $user = User::where('group_code', session('user'))->first();
                $user->progress = 'Game/Pos5Part2';
                $user->save();
                return redirect('/game');
                break;
            case 53:
                $kode = KodePos::where('id', 5)->first();
                if($kode->kode_akhir != strtolower($request->input('code'))){
                    return back()->with('error', 'ERROR: Kode tidak dikenal.');
                }else{
                    return back()->with('success', true);
                }
                break;
            case 54:
                $user = User::where('group_code', session('user'))->first();
                $user->progress = 'Selesai';
                $user->save();

                if (session()->has('start_time')) {
                    $elapsed_time = time() - session('start_time');
                    $user->time = $elapsed_time;
                    $user->save();
                }

                return redirect('/');
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
