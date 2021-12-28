<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            RoleSeeder::class,
            PermissionSeeder::class,
            ExerciseSeeder::class,
            LessonSeeder::class,
            PathSeeder::class,
            SeriesSeeder::class,
            SkillSeeder::class,
            EpisodeSeeder::class
        ]);
    }
}
