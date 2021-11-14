<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Role;
use App\Models\Country;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'role_id' => Role::pluck('id')->random(),
            'first_name' => $this->faker->firstName(),
            'last_name' => $this->faker->firstName(),
            'country_id' => Country::pluck('id')->random(),
            'email' => $this->faker->lastName(),     
            'phone_nr' => $this->faker->phoneNumber(), 
            'vacation_days' =>  30,
            'vacation_days_left' => $this->faker->numberBetween(10,30),                                
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
