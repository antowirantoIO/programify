<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Scout\Searchable;

class Series extends Model
{
    use HasFactory;
    use Searchable;

    protected $guarded = [];

    public function skills()
    {
        return $this->belongsToMany(Skill::class);
    }

    public function mentor()
    {
        return $this->belongsTo(User::class, 'mentor_id');
    }

    public function episodes()
    {
        return $this->hasMany(Episode::class);
    }
}
