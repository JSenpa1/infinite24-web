<?php

namespace App\Http\Controllers;

use App\Models\Pos4;
use App\Http\Requests\StorePos4Request;
use App\Http\Requests\UpdatePos4Request;
use Exception;
use Illuminate\Http\Request;

class Pos4Controller extends Controller
{
    public function checkJawaban(Request $request) {
        $request->validate([
            'jawaban' => 'required|string',
        ]);

        try {
            $jawaban = $request->input('jawaban');

            $jawaban_benar = Pos4::where('id', 1)->value('jawaban');

            if($jawaban == $jawaban_benar) {
                return response()->json(['message' => 'benar']);
            } else {
                return response()->json(['message' => 'salah']);
            }
        } catch(Exception $e){
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
    public function store(StorePos4Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Pos4 $pos4)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pos4 $pos4)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePos4Request $request, Pos4 $pos4)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pos4 $pos4)
    {
        //
    }
}
