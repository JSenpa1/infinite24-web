<?php

namespace App\Http\Controllers;

use App\Models\Pos1;
use App\Http\Requests\StorePos1Request;
use App\Http\Requests\UpdatePos1Request;
use Illuminate\Http\Request;

class Pos1Controller extends Controller
{
    
    public function checkKodeGrup(Request $request) {
        $request->validate([
            'input_kode' => 'required|string'
        ]);

        try{
            $input_kode = $request->input('input_kode');
            
            $check_kode = GroupCode::where('kode_grup', strtoupper($input_kode))
            ->value('id');
            
            if ($check_kode) {
                return response()->json(['message' => 'Kode Grup: ', 'id' => $check_kode]);
            } else {
                return response()->json(['message' => 'Kode Grup Salah'], 404);
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
    public function store(StorePos1Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Pos1 $pos1)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Pos1 $pos1)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePos1Request $request, Pos1 $pos1)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pos1 $pos1)
    {
        //
    }
}
