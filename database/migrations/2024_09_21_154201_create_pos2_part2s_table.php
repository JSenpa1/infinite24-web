<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pos2_part2', function (Blueprint $table) {
            $table->id();
            $table->longText('answer');
        });

        $data = [
            [
                'answer' => 'kami adalah mahasiswa-mahasiswi universitas multimedia nusantara, dan kami berasal dari prodi informatika. setiap hari kami melaksanakan perkuliahan yang dimulai dengan belajar tentang algoritma dan pemrograman. setelah melaksanakan perkuliahan, kami lanjut mengerjakan tugas bersama-sama hingga matahari terbenam. walaupun lelah, itu semua merupakan kewajiban kami sebagai mahasiswa.',
            ],
        ];

        DB::table('pos2_part2')->insert($data);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pos2_part2s');
    }
};
