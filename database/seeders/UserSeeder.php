<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
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
            User::create([
                // 'id' => $index + 1, 
                'group_code' => $group,
                'group_name' => $index + 1,
            ]);
        }
    }
}
