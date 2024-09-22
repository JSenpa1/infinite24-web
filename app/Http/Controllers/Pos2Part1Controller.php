<?php

namespace App\Http\Controllers;

use App\Models\Pos2Part1;
use App\Http\Requests\StorePos2Part1Request;
use App\Http\Requests\UpdatePos2Part1Request;
use Illuminate\Http\Request;

class Pos2Part1Controller extends Controller
{
    public function checkJawaban(Request $request) {
        $request->validate([
            'jawaban' => 'required|string',
            'id' => 'required|integer'
        ]);

        try{
            $id = $request->input('id');
            $jawaban = $request->input('jawaban');

            $jawaban_benar = Pos2Part1::where('id', $id)->value('jawaban');
            
            if ($jawaban == $jawaban_benar) {
                return response()->json(['message' => 'benar']);
            } else {
                return response()->json(['message' => 'salah'], 404);
            }
        }catch(\Exception $e){
            return response()->json(['message' => 'Error: ' . $e->getMessage()], 500);
        }
    }

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
    public function store(StorePos2Part1Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Pos2Part1 $pos2Part1)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pos2Part1 $pos2Part1)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePos2Part1Request $request, Pos2Part1 $pos2Part1)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pos2Part1 $pos2Part1)
    {
        //
    }
}
