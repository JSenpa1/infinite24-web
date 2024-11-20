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
        Schema::create('pos2_part1', function (Blueprint $table) {
            $table->id();
            $table->string('answer');
        });

        $data = [
            [
                'answer' => 'warung makan yang terletak di sulawesi',
            ],
            [
                'answer' => 'makanan lezat dan bergizi bang mursid',
            ],
            [
                'answer' => 'tempat minuman yang ada buah dan sayur nya',
            ],
        ];

        DB::table('pos2_part1')->insert($data);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pos2_part1s');
    }
};
