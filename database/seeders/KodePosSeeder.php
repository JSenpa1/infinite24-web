<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\KodePos;

class KodePosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        KodePos::create([
            'id' => 1,
            'kode' => 'berangkat',
        ]);

        KodePos::create([
            'id' => 2,
            'kode' => 'datang',
        ]);

        KodePos::create([
            'id' => 3,
            'kode' => 'masuk',
        ]);

        KodePos::create([
            'id' => 4,
            'kode' => 'keluar',
        ]);

        KodePos::create([
            'id' => 5,
            'kode' => 'tiba',
        ]);

        KodePos::create([
            'id' => 6,
            'kode' => 'pulang',
        ]);

        KodePos::create([
            'id' => 7,
            'kode' => 'pergi',
        ]);

        KodePos::create([
            'id' => 8,
            'kode' => 'kembali',
        ]);

        KodePos::create([
            'id' => 9,
            'kode' => 'berita',
        ]);

        KodePos::create([
            'id' => 10,
            'kode' => 'ujian',
        ]);
    }
}
