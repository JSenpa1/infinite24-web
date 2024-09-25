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
            1 => ['jawaban' => '124047', 'clock' => 'clock1.png'],
            2 => ['jawaban' => '032047', 'clock' => 'clock2.png'],
            3 => ['jawaban' => '100547', 'clock' => 'clock3.png'],
            4 => ['jawaban' => '011047', 'clock' => 'clock4.png'],
            5 => ['jawaban' => '075047', 'clock' => 'clock5.png'],
            6 => ['jawaban' => '092547', 'clock' => 'clock6.png'],
            7 => ['jawaban' => '054047', 'clock' => 'clock7.png'],
            8 => ['jawaban' => '023047', 'clock' => 'clock8.png'],
            9 => ['jawaban' => '111547', 'clock' => 'clock9.png'],
            10 => ['jawaban' => '044547', 'clock' => 'clock10.png'],
            11 => ['jawaban' => '014547', 'clock' => 'clock11.png'],
            12 => ['jawaban' => '081047', 'clock' => 'clock12.png'],
            13 => ['jawaban' => '102547', 'clock' => 'clock13.png'],
            14 => ['jawaban' => '064047', 'clock' => 'clock14.png'],
            15 => ['jawaban' => '112547', 'clock' => 'clock15.png'],
            16 => ['jawaban' => '034047', 'clock' => 'clock16.png'],
            17 => ['jawaban' => '051047', 'clock' => 'clock17.png'],
            18 => ['jawaban' => '122047', 'clock' => 'clock18.png'],
            19 => ['jawaban' => '071547', 'clock' => 'clock19.png'],
            20 => ['jawaban' => '014047', 'clock' => 'clock20.png'],
            21 => ['jawaban' => '091047', 'clock' => 'clock21.png'],
            22 => ['jawaban' => '024547', 'clock' => 'clock22.png'],
            23 => ['jawaban' => '061547', 'clock' => 'clock23.png'],
            24 => ['jawaban' => '041047', 'clock' => 'clock24.png'],
            25 => ['jawaban' => '085547', 'clock' => 'clock25.png'],
            26 => ['jawaban' => '114047', 'clock' => 'clock26.png'],
            27 => ['jawaban' => '012547', 'clock' => 'clock27.png'],
            28 => ['jawaban' => '125047', 'clock' => 'clock28.png'],
            29 => ['jawaban' => '103547', 'clock' => 'clock29.png'],
            30 => ['jawaban' => '035547', 'clock' => 'clock30.png'],
        ];

        // Insert data into Pos3 table
        foreach ($data as $id => $entry) {
            Pos3::create([
                'id' => $id,
                'jawaban' => $entry['jawaban'],
                'clock' => $entry['clock'] 
            ]);
        }
    }
}
