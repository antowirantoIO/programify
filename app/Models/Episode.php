<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Episode extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function series()
    {
        return $this->belongsTo(Series::class);
    }

    public function lessons()
    {
        return $this->hasMany(Lesson::class);
    }
}
