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
        $data = [
            [
                'answer' => json_encode([2, -6, 6, -2, 1, 8, 14, 10, 9]),
                'image' => 'Assets/Game/Pos1/soal1.png',
                'title' => 'Assets/Game/Pos1/tulisansoal1.svg',
            ],
            [
                'answer' => json_encode([3, 9, 2, 74, 4, 10, 80, 7, 1, 5, 8, 6]),
                'image' => 'Assets/Game/Pos1/soal2.png',
                'title' => 'Assets/Game/Pos1/tulisansoal2.svg',
            ],
        ];

        foreach ($data as $item) {
            Pos1::create([
                'answer' => $item['answer'],
                'image' => $item['image'],
                'title' => $item['title'],
            ]);
        }
    }
}
