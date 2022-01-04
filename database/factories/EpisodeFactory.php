<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class EpisodeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->text(120),
            'slug' => $this->faker->slug(50),
            'duration' => $this->faker->time('i:s'),
            'episode' => random_int(1, 15),
            'series_id' => random_int(1, 50),
        ];
    }
}
