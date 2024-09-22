<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pos3;

class Pos3Seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            1 => '124047',
            2 => '032047',
            3 => '100547',
            4 => '011047',
            5 => '075047',
            6 => '092547',
            7 => '054047',
            8 => '023047',
            9 => '111547',
            10 => '044547',
            11 => '014547',
            12 => '081047',
            13 => '102547',
            14 => '064047',
            15 => '112547',
            16 => '034047',
            17 => '051047',
            18 => '122047',
            19 => '071547',
            20 => '014047',
            21 => '091047',
            22 => '024547',
            23 => '061547',
            24 => '041047',
            25 => '085547',
            26 => '114047',
            27 => '012547',
            28 => '125047',
            29 => '103547',
            30 => '035547',
        ];

        // Insert data ke dalam tabel Pos3
        foreach ($data as $id => $time) {

            Pos3::create([
                'id' => $id,
                'jawaban' => $time
            ]);
        }
    }
}
