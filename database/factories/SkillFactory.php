<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class SkillFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->text(10),
            'slug' => $this->faker->slug(5),
            'explanation' => $this->faker->text(200),
            'icon' => $this->faker->text(5)
        ];
    }
}
