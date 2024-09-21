<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pos1_board2', function (Blueprint $table) {
            // $table->id(); keanya ga perlu 
            $table->string('soal'); //misal A, B, dsb
            $table->string('jawaban');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pos1_board2s');
    }
};
