<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Session>
 */
class SessionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'connectionId' => fake()->unique()->regexify('[0-9]{10}'),
            'password' => Str::random(8),
            'title' => fake()->sentence(3),
            'owner_id' => function () {
                return \App\Models\User::factory()->create()->id;
            },
            'deck_id' => \App\Models\Deck::all()->random()->id,
            'terminated' => 0,
        ];
    }
}
