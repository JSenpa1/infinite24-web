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
        Schema::create('pos1', function (Blueprint $table) {
            $table->id();
            $table->string('answer');
            $table->string('image');
            $table->string('title');
        });

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

        DB::table('pos1')->insert($data);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pos1s');
    }
};
