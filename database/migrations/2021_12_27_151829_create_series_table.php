<?php

use App\Models\Skill;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSeriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('series', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug');
            $table->longText('description');
            $table->float('duration');
            $table->string('level');
            $table->string('status')->nullable();
            $table->string('language');
            $table->string('thumbnail');
            $table->string('introduction_video');
            $table->foreignIdFor(User::class, 'mentor_id');
            $table->json('meta_keyword')->nullable();
            $table->text('meta_description')->nullable();
            $table->float('review')->default(0.0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('series');
    }
}
