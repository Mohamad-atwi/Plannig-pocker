<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserEstimation>
 */
class UserEstimationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' =>  \App\Models\User::all()->random()->id,
            'session_id' =>  \App\Models\Session::all()->random()->id,
            'card_id' =>  \App\Models\Card::all()->random()->id,

        ];
    }
}
