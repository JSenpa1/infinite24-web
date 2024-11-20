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
        Schema::create('pos4', function (Blueprint $table) {
            $table->id();
            $table->string('answer');
        });

        $data = [
            [
                'answer' => 'lubang',
            ],
        ];

        DB::table('pos4')->insert($data);
    }

    /**
     * Reverse the migrations.
     */
    
    public function down(): void
    {
        Schema::dropIfExists('pos4s');
    }
};
