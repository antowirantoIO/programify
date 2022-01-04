<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class SeriesFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    return [
      'title' => $this->faker->text('30'),
      'slug' => $this->faker->slug('10'),
      'description' => $this->faker->text(200),
      'duration' => $this->faker->time(),
      'level' => 'intermidate',
      'status' => 'development',
      'language' => $this->faker->locale(),
      'thumbnail' => 'thumbnail',
      'introduction_video' => 'intro',
      'mentor_id' => random_int(1, 10),
      'meta_keyword' => '',
      'meta_description' => $this->faker->realText(200),
      'review' => 5.0,
    ];
  }
}
