<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Peserta;

class PesertaController extends Controller
{
    public function inputPeserta(Request $request)
    {
        $request->validate([
            'nama' => 'required|string',
            'nim' => 'required|string',
            'angkatan' => 'required|string',
            'email' => 'required|string'
        ]);

        try {
            $nama = $request->input('nama');
            $nim = $request->input('nim');
            $angkatan = $request->input('angkatan');
            $email = $request->input('email');

            if(str_ends_with($email, '@student.umn.ac.id')){
                $peserta = Peserta::create([
                    'nama' => $nama,
                    'nim' => $nim,
                    'angkatan' => $angkatan,
                    'email' => $email,
                    'regis_ulang' => false
                ]);
    
                return response()->json(['message' => 'Berhasil Diinput'], 200);
            }else{
                return response()->json(['message' => 'Invalid Email'], 404);
            }

        } catch (\Exception $e) {
            return response()->json(['message' => 'Error: ' . $e->getMessage()], 500);
        }
    }

    public function updateRegis(Request $request)
    {
        $request->validate([
            'nim' => 'required|string'
        ]);

        try {
            $nim = $request->input('nim');

            $peserta = Peserta::where('nim', $nim)->first();

            if ($peserta) {
                $peserta->regis_ulang = true;
                $peserta->save();

                return response()->json(['message' => 'Berhasil Update'], 200);
            } else {
                return response()->json(['message' => 'nim salah'], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error: ' . $e->getMessage()], 500);
        }
    }

}
