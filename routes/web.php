<?php

use App\Http\Controllers\DashboardContoller;
use App\Http\Controllers\PathController;
use App\Http\Controllers\SkillController;
use App\Http\Controllers\SeriesController;
use App\Http\Controllers\EpisodeController;
use App\Http\Controllers\LessonController;
use App\Http\Controllers\ExerciseController;
use App\Http\Controllers\WelcomeContoller;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\URL;

if (request()->getHost() != '127.0.0.1') {
    URL::forceScheme('https');
}

Route::get('/', WelcomeContoller::class)->name('welcome');

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
    Route::get('/dashboard', DashboardContoller::class)->name('dashboard');

    Route::prefix('path')->name('path.')->group(function () {
        Route::get('/', [PathController::class, 'index'])->name('index');
        Route::get('/create', [PathController::class, 'create'])->name('create');
        Route::post('/store', [PathController::class, 'store'])->name('store');
        Route::get('/{path:slug}', [PathController::class, 'show'])->name('show');
        Route::get('/edit/{path:slug}', [PathController::class, 'edit'])->name('edit');
        Route::patch('/update/{path:slug}', [PathController::class, 'update'])->name('index');
        Route::delete('/destroy/{path:slug}', [PathController::class, 'destroy'])->name('index');
    });

    Route::prefix('skill')->name('skill.')->group(function () {
        Route::get('/', [SkillController::class, 'index'])->name('index');
        Route::get('/create', [SkillController::class, 'create'])->name('create');
        Route::post('/store', [SkillController::class, 'store'])->name('store');
        Route::get('/{skill:slug}', [SkillController::class, 'show'])->name('show');
        Route::get('/edit/{skill:slug}', [SkillController::class, 'edit'])->name('edit');
        Route::patch('/update/{skill:slug}', [SkillController::class, 'update'])->name('index');
        Route::delete('/destroy/{skill:slug}', [SkillController::class, 'destroy'])->name('index');
    });

    Route::prefix('series')->name('series.')->group(function () {
        Route::get('/', [SeriesController::class, 'index'])->name('index');
        Route::get('/create', [SeriesController::class, 'create'])->name('create');
        Route::post('/store', [SeriesController::class, 'store'])->name('store');
        Route::get('/{series:slug}', [SeriesController::class, 'show'])->name('show');
        Route::get('/edit/{series:slug}', [SeriesController::class, 'edit'])->name('edit');
        Route::patch('/update/{series:slug}', [SeriesController::class, 'update'])->name('index');
        Route::delete('/destroy/{series:slug}', [SeriesController::class, 'destroy'])->name('index');
    });

    Route::prefix('episode')->name('episode.')->group(function () {
        Route::get('/', [EpisodeController::class, 'index'])->name('index');
        Route::get('/create', [EpisodeController::class, 'create'])->name('create');
        Route::post('/store', [EpisodeController::class, 'store'])->name('store');
        Route::get('/{episode:slug}', [EpisodeController::class, 'show'])->name('show');
        Route::get('/edit/{episode:slug}', [EpisodeController::class, 'edit'])->name('edit');
        Route::patch('/update/{episode:slug}', [EpisodeController::class, 'update'])->name('index');
        Route::delete('/destroy/{episode:slug}', [EpisodeController::class, 'destroy'])->name('index');
    });

    Route::prefix('exercise')->name('exercise.')->group(function () {
        Route::get('/', [ExerciseController::class, 'index'])->name('index');
        Route::get('/create', [ExerciseController::class, 'create'])->name('create');
        Route::post('/store', [ExerciseController::class, 'store'])->name('store');
        Route::get('/{exercise:slug}', [ExerciseController::class, 'show'])->name('show');
        Route::get('/edit/{exercise:slug}', [ExerciseController::class, 'edit'])->name('edit');
        Route::patch('/update/{exercise:slug}', [ExerciseController::class, 'update'])->name('index');
        Route::delete('/destroy/{exercise:slug}', [ExerciseController::class, 'destroy'])->name('index');
    });

    Route::prefix('lesson')->name('lesson.')->group(function () {
        Route::get('/', [LessonController::class, 'index'])->name('index');
        Route::get('/create', [LessonController::class, 'create'])->name('create');
        Route::post('/store', [LessonController::class, 'store'])->name('store');
        Route::get('/{lesson:slug}', [LessonController::class, 'show'])->name('show');
        Route::get('/edit/{lesson:slug}', [LessonController::class, 'edit'])->name('edit');
        Route::patch('/update/{lesson:slug}', [LessonController::class, 'update'])->name('index');
        Route::delete('/destroy/{lesson:slug}', [LessonController::class, 'destroy'])->name('index');
    });
});
