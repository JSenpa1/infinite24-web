<?php

namespace App\Http\Controllers;

use App\Models\Pos2Part2;
use App\Http\Requests\StorePos2Part2Request;
use App\Http\Requests\UpdatePos2Part2Request;
use Illuminate\Http\Request;

class Pos2Part2Controller extends Controller
{
    public function checkJawaban(Request $request) {
        $request->validate([
            'jawaban' => 'required|string',
        ]);

        try{
            $jawaban = $request->input('jawaban');
            $jawaban_benar = Pos2Part2::where('id', 1)->value('jawaban');
            
            // $check_jawaban = Pos2Part2::where('id', '1')
            // ->where('jawaban', $jawaban);
            
            if ($jawaban == $jawaban_benar) {
                return response()->json(['message' => 'benar']);
            } else {
                return response()->json(['message' => 'salah'], 404);
            }
        }catch(\Exception $e){
            return response()->json(['message' => 'Error: ' . $e->getMessage()], 500);
        }
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePos2Part2Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Pos2Part2 $pos2Part2)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pos2Part2 $pos2Part2)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePos2Part2Request $request, Pos2Part2 $pos2Part2)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pos2Part2 $pos2Part2)
    {
        //
    }
}
