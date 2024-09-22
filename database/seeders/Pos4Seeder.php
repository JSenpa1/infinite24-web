<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pos4;

class Pos4Seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Pos4::create([
            'id' => 1,
            'jawaban' => 'lubang',
        ]);
    }
}
