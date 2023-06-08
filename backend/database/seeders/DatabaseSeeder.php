<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\Deck::factory()->create();
        \App\Models\Card::factory()->create([
            'value' => 1
        ]);
        \App\Models\Card::factory()->create([
            'value' => 2
        ]);
        \App\Models\Card::factory()->create([
            'value' => 3
        ]);
        \App\Models\Card::factory()->create([
            'value' => 4
        ]);
        \App\Models\Card::factory()->create([
            'value' => 5
        ]);
        \App\Models\Card::factory()->create([
            'value' => 6
        ]);
        \App\Models\Card::factory()->create([
            'value' => 7
        ]);
        \App\Models\Card::factory()->create([
            'value' => 8
        ]);
        \App\Models\Card::factory()->create([
            'value' => 9
        ]);
        \App\Models\Card::factory()->create([
            'value' => 10
        ]);
        // \App\Models\User::factory(10)->create();
        // \App\Models\Session::factory(1)->create();
        // \App\Models\Storie::factory(10)->create();
        // \App\Models\UserEstimation::factory(3)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
