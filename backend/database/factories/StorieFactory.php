<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Storie>
 */
class StorieFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
          
            'text' => fake()->text(400),
            'session_id' => function () {
                return \App\Models\Session::factory()->create()->id;
            },
        ];
    }
}
