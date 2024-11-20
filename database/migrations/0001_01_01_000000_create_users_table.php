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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('group_name');
            $table->string('group_code')->unique();
            $table->string('progress')->nullable();
            $table->string('time')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });

        $data = [
            [
                'group_name' => 'Group 1',
                'group_code' => 'B678SJ',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 2',
                'group_code' => 'DH7SA2',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 3',
                'group_code' => 'FH3BA7',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 4',
                'group_code' => 'JK9XA3',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 5',
                'group_code' => 'LM2PD6',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 6',
                'group_code' => 'QW8ZT9',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 7',
                'group_code' => 'VX3KA1',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 8',
                'group_code' => 'RE5LU2',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 9',
                'group_code' => 'NH4BO8',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 10',
                'group_code' => 'TY6PF3',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 11',
                'group_code' => 'PL7XK4',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 12',
                'group_code' => 'KM2RY9',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 13',
                'group_code' => 'DS9WU6',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 14',
                'group_code' => 'HQ1ZA3',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 15',
                'group_code' => 'JL4TN7',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 16',
                'group_code' => 'OP8BX5',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 17',
                'group_code' => 'MU3CZ4',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 18',
                'group_code' => 'EW5TR9',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 19',
                'group_code' => 'YZ1KP6',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 20',
                'group_code' => 'QW9LA3',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 21',
                'group_code' => 'BN3OP5',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 22',
                'group_code' => 'FH7XZ6',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 23',
                'group_code' => 'JK2MB9',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 24',
                'group_code' => 'LU8KA1',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 25',
                'group_code' => 'OP4TR7',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 26',
                'group_code' => 'XY6MN8',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 27',
                'group_code' => 'PL9ZK2',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 28',
                'group_code' => 'RE5TW3',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 29',
                'group_code' => 'VU1CX7',
                'progress' => 'Game/Pos1',
            ],
            [
                'group_name' => 'Group 30',
                'group_code' => 'NH7XR5',
                'progress' => 'Game/Pos1',
            ],
        ];

        DB::table('users')->insert($data);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('sessions');
    }
};
