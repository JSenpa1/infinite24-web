<?php

namespace App\Http\Controllers;

use App\Models\Pos3;
use App\Http\Requests\StorePos3Request;
use App\Http\Requests\UpdatePos3Request;
use Illuminate\Http\Request;

class Pos3Controller extends Controller
{
    public function checkJawaban(Request $request) {
        $request->validate([
            'jawaban' => 'required|string',
            'id' => 'required|integer'
        ]);

        try{
            $id = $request->input('id');
            $jawaban = $request->input('jawaban');

            $jawaban_benar = Pos3::where('id', $id)->value('jawaban');
            
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
    public function store(StorePos3Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Pos3 $pos3)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pos3 $pos3)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePos3Request $request, Pos3 $pos3)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pos3 $pos3)
    {
        //
    }
}
