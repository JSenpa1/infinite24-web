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
        Schema::create('pos3', function (Blueprint $table) {
            $table->id();
            $table->string('answer');
            $table->string('clock');
        });

        $data = [
            [
                'answer' => '124047',
                'clock' => 'Assets/Game/Clock/clock1.png',
            ],
            [
                'answer' => '032047',
                'clock' => 'Assets/Game/Clock/clock2.png',
            ],
            [
                'answer' => '100547',
                'clock' => 'Assets/Game/Clock/clock3.png',
            ],
            [
                'answer' => '011047',
                'clock' => 'Assets/Game/Clock/clock4.png',
            ],
            [
                'answer' => '075047',
                'clock' => 'Assets/Game/Clock/clock5.png',
            ],
            [
                'answer' => '092547',
                'clock' => 'Assets/Game/Clock/clock6.png',
            ],
            [
                'answer' => '054047',
                'clock' => 'Assets/Game/Clock/clock7.png',
            ],
            [
                'answer' => '023047',
                'clock' => 'Assets/Game/Clock/clock8.png',
            ],
            [
                'answer' => '111547',
                'clock' => 'Assets/Game/Clock/clock9.png',
            ],
            [
                'answer' => '044547',
                'clock' => 'Assets/Game/Clock/clock10.png',
            ],
            [
                'answer' => '014547',
                'clock' => 'Assets/Game/Clock/clock11.png',
            ],
            [
                'answer' => '081047',
                'clock' => 'Assets/Game/Clock/clock12.png',
            ],
            [
                'answer' => '102547',
                'clock' => 'Assets/Game/Clock/clock13.png',
            ],
            [
                'answer' => '064047',
                'clock' => 'Assets/Game/Clock/clock14.png',
            ],
            [
                'answer' => '112547',
                'clock' => 'Assets/Game/Clock/clock15.png',
            ],
            [
                'answer' => '034047',
                'clock' => 'Assets/Game/Clock/clock16.png',
            ],
            [
                'answer' => '051047',
                'clock' => 'Assets/Game/Clock/clock17.png',
            ],
            [
                'answer' => '122047',
                'clock' => 'Assets/Game/Clock/clock18.png',
            ],
            [
                'answer' => '071547',
                'clock' => 'Assets/Game/Clock/clock19.png',
            ],
            [
                'answer' => '014047',
                'clock' => 'Assets/Game/Clock/clock20.png',
            ],
            [
                'answer' => '091047',
                'clock' => 'Assets/Game/Clock/clock21.png',
            ],
            [
                'answer' => '024547',
                'clock' => 'Assets/Game/Clock/clock22.png',
            ],
            [
                'answer' => '061547',
                'clock' => 'Assets/Game/Clock/clock23.png',
            ],
            [
                'answer' => '041047',
                'clock' => 'Assets/Game/Clock/clock24.png',
            ],
            [
                'answer' => '085547',
                'clock' => 'Assets/Game/Clock/clock25.png',
            ],
            [
                'answer' => '114047',
                'clock' => 'Assets/Game/Clock/clock26.png',
            ],
            [
                'answer' => '012547',
                'clock' => 'Assets/Game/Clock/clock27.png',
            ],
            [
                'answer' => '125047',
                'clock' => 'Assets/Game/Clock/clock28.png',
            ],
            [
                'answer' => '103547',
                'clock' => 'Assets/Game/Clock/clock29.png',
            ],
            [
                'answer' => '035547',
                'clock' => 'Assets/Game/Clock/clock30.png',
            ],
        ];

        DB::table('pos3')->insert($data);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pos3s');
    }
};
