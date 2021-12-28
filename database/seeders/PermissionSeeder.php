<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Path
        Permission::create(['name' => 'path.index']);
        Permission::create(['name' => 'path.create']);
        Permission::create(['name' => 'path.store']);
        Permission::create(['name' => 'path.show']);
        Permission::create(['name' => 'path.edit']);
        Permission::create(['name' => 'path.update']);
        Permission::create(['name' => 'path.destroy']);

        // Skill
        Permission::create(['name' => 'skill.index']);
        Permission::create(['name' => 'skill.create']);
        Permission::create(['name' => 'skill.store']);
        Permission::create(['name' => 'skill.show']);
        Permission::create(['name' => 'skill.edit']);
        Permission::create(['name' => 'skill.update']);
        Permission::create(['name' => 'skill.destroy']);

        // Series
        Permission::create(['name' => 'series.index']);
        Permission::create(['name' => 'series.create']);
        Permission::create(['name' => 'series.store']);
        Permission::create(['name' => 'series.show']);
        Permission::create(['name' => 'series.edit']);
        Permission::create(['name' => 'series.update']);
        Permission::create(['name' => 'series.destroy']);
        
        // Episode
        Permission::create(['name' => 'episode.index']);
        Permission::create(['name' => 'episode.create']);
        Permission::create(['name' => 'episode.store']);
        Permission::create(['name' => 'episode.show']);
        Permission::create(['name' => 'episode.edit']);
        Permission::create(['name' => 'episode.update']);
        Permission::create(['name' => 'episode.destroy']);
        
        // Lesson
        Permission::create(['name' => 'lesson.index']);
        Permission::create(['name' => 'lesson.create']);
        Permission::create(['name' => 'lesson.store']);
        Permission::create(['name' => 'lesson.show']);
        Permission::create(['name' => 'lesson.edit']);
        Permission::create(['name' => 'lesson.update']);
        Permission::create(['name' => 'lesson.destroy']);
        
        // Exercise
        Permission::create(['name' => 'exercise.index']);
        Permission::create(['name' => 'exercise.create']);
        Permission::create(['name' => 'exercise.store']);
        Permission::create(['name' => 'exercise.show']);
        Permission::create(['name' => 'exercise.edit']);
        Permission::create(['name' => 'exercise.update']);
        Permission::create(['name' => 'exercise.destroy']);

    }
}
