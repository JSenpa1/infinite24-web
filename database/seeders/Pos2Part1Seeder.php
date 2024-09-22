<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pos2Part1;

class Pos2Part1Seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for ($i = 1; $i <= 10; $i++) {
            Pos2Part1::create([
                'id' => $i,
                'jawaban' => 'warung makan yang terletak di sulawesi',
            ]);
        }

        for ($i = 11; $i <= 20; $i++) {
            Pos2Part1::create([
                'id' => $i,
                'jawaban' => 'makanan lezat dan bergizi bang mursid',
            ]);
        }

        
        for ($i = 21; $i <= 30; $i++) {
            Pos2Part1::create([
                'id' => $i,
                'jawaban' => 'tempat minuman yang ada buah dan sayur nya',
            ]);
        }
    }
}
