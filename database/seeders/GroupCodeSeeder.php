<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\GroupCode;

class GroupCodeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $groupCode = [
            'LION',
            'TIGER',
            'ELEPHANT',
            'GIRAFFE',
            'ZEBRA',
            'PANDA',
            'KANGAROO',
            'BEAR',
            'WOLF',
            'FOX',
            'RABBIT',
            'DEER',
            'CHEETAH',
            'LEOPARD',
            'BUFFALO',
            'GORILLA',
            'CHIMPANZEE',
            'RHINOCEROS',
            'HIPPOPOTAMUS',
            'CROCODILE',
            'ALLIGATOR',
            'EAGLE',
            'HAWK',
            'OWL',
            'DOLPHIN',
            'SHARK',
            'WHALE',
            'TURTLE',
            'PENGUIN',
            'FLAMINGO',
        ];

        foreach ($groupCode as $index => $group) {
            GroupCode::create([
                'id' => $index + 1, 
                'kode_grup' => $group,
            ]);
        }
    }
}
