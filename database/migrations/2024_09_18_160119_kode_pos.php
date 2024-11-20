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
        Schema::create('kodepos', function (Blueprint $table) {
            $table->id();
            $table->string('kode_awal');
            $table->string('kode_akhir');
        });

        $data = [
            [
                'kode_akhir' => 'kantin',
                'kode_awal' => 'tumpah',
            ],
            [
                'kode_akhir' => 'connector',
                'kode_awal' => '0',
            ],
            [
                'kode_akhir' => 'bazaar',
                'kode_awal' => 'gajah',
            ],
            [
                'kode_akhir' => 'lobby b',
                'kode_awal' => 'bohongnya',
            ],
            [
                'kode_akhir' => 'function hall',
                'kode_awal' => '',
            ],
        ];

        DB::table('kodepos')->insert($data);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
