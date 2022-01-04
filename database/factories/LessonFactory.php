<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class LessonFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->text(50),
            'slug' => $this->faker->slug(20),
            'explanation' => $this->faker->text(300),
            'video_url' => 'https://youtube.com',
            'duration' => $this->faker->time('i:s'),
            'episode_id' => random_int(1, 15),
        ];
    }
}
