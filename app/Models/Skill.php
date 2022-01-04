<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Skill extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'slug', 'explanation', 'icon'];

    public function series()
    {
        return $this->belongsToMany(Series::class);
    }
}
