<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pos2Part2;

class Pos2Part2Seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Pos2Part2::create([
            'id' => 1,
            'jawaban' => 'Kami adalah mahasiswa-mahasiswi Universitas Multimedia Nusantara, dan kami berasal dari prodi Informatika. Setiap hari kami melaksanakan perkuliahan yang dimulai dengan belajar tentang algoritma dan pemrograman. Setelah melaksanakan perkuliahan, kami lanjut mengerjakan tugas bersama-sama hingga matahari terbenam. Walaupun lelah, itu semua merupakan kewajiban kami sebagai mahasiswa.',
        ]);
    }
}
