<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pos1;

class Pos1Seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
    
        $board1 = [
            'A1' => '2',
            'B1' => '-6',
            'C1' => '6',
            'D1' => '-2',
            'E1' => '1',
            'F1' => '8',
            'G1' => '14',
            'H1' => '10',
            'I1' => '9',
        ];

        $board2 = [
            'A2' => '3',
            'B2' => '9',
            'C2' => '2',
            'D2' => '74',
            'E2' => '4',
            'F2' => '10',
            'G2' => '80',
            'H2' => '7',
            'I2' => '1',
            'J2' => '5',
            'K2' => '8',
            'L2' => '6',
            'M2' => '9',
        ];

        foreach ($board1 as $soal => $jawaban) {
            Pos1::create([
                'soal' => $soal,
                'jawaban' => $jawaban,
            ]);
        }

        foreach ($board2 as $soal => $jawaban) {
            Pos1::create([
                'soal' => $soal,
                'jawaban' => $jawaban,
            ]);
        }
    }
}
