<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\ticket;

class TicketSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ticket::create([
            'id' => '1',
            'price' => 15000,
        ]);

        ticket::create([
            'id' => '2',
            'price' => 20000,
        ]);
    }
}
