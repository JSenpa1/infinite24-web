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
        Schema::create('problems', function (Blueprint $table) {
            $table->id();
            $table->integer('pos_id');
            $table->json('answer');
            $table->string('image');
            $table->timestamps();
        });

        $data = [
            [
                'pos_id' => 1,
                'answer' => json_encode([1, 2, 3, 4, 5, 6, 7, 8, 9]),
                'image' => 'jawaban_pos1/blabla1.jpg',
            ],
            [
                'pos_id' => 1,
                'answer' => json_encode([1, 2, 3, 4, 5, 6, 7, 8, 9]),
                'image' => 'jawaban_pos1/blabla2.jpg',
            ],
        ];

        DB::table('problems')->insert($data);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('problems');
    }
};
