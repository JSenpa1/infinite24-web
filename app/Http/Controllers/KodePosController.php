<?php

namespace App\Http\Controllers;

use App\Models\KodePos;
use App\Http\Requests\StoreKodePosRequest;
use App\Http\Requests\UpdateKodePosRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class KodePosController extends Controller
{
    public function getAuth(Request $request)
    {
        try{
            $input_kode = $request->input('input_kode');
            $check_kode = KodePos::where('kode', $input_kode)->first();
            if ($check_kode) {
                return response()->json([
                    'id' => $check_kode->id,
                    'kode' => $check_kode->kode,
                ]);
            } else {
                return response()->json(['message' => 'Kode Salah'], 404);
            }
        }catch(\Exception $e){
            return response()->json(['message' => 'Error: ' . $e->getMessage()], 500);
        }
    }

    public function getKodePos(Request $request)
    {
        try{

            $input_id = $request->input('input_id'); 
            $input_kode = $request->input('input_kode');
            
            $check_kode = KodePos::where('id', $input_id)
            ->where('kode', $input_kode)
            ->first();
            
            if ($check_kode) {
                return response()->json(['message' => 'Kode Benar']);
            } else {
                return response()->json(['message' => 'Kode Salah'], 404);
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
    public function store(StoreKodePosRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(KodePos $kodePos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(KodePos $kodePos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateKodePosRequest $request, KodePos $kodePos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(KodePos $kodePos)
    {
        //
    }
}
