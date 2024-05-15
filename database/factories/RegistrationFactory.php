<?php

namespace Database\Factories;

use Faker\Provider\ar_EG\Payment;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class RegistrationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $conference = ["Ogbomosho","Oyo","LagosCentral", "Ibadan"];
        return [
            "name"=>fake()->name(),
            "conference"=> $conference[rand(0,3)],
            "association"=> fake()->text(10),
            "church"=> fake()->word(),
            "payment_id"=> date("Y").date("m").fake()->uuid(),
        ];
    }
}
