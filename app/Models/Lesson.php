<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function episode()
    {
        return $this->belongsTo(Episode::class);
    }

    public function exercises()
    {
        return $this->hasMany(Exercise::class);
    }
}
