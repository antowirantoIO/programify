<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Route;

// URL::forceScheme('https');

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('language/{language}', function ($language) {
    Session()->put('locale', $language);

    return redirect()->back();
})->name('language');

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('homepage');

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::get('/lang', function () {
    return Inertia::render('Lang');
})->name('lang');

Route::get('/browse/all', function () {
    return Inertia::render('Front/Topics/Index');
})->name('topics');

Route::get('/series', function () {
    return Inertia::render('Front/Series/Index');
})->name('series');

Route::get('/series/show', function () {
    return Inertia::render('Front/Series/Show');
})->name('series.show');

Route::get('/series/play', function () {
    return Inertia::render('Front/Series/Play');
})->name('series.play');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/Index');
})->name('dashboard.index');

Route::get('/dashboard/series', function () {
    return Inertia::render('Series/Index');
})->name('series.index');

Route::get('subscription', function () {
    return Inertia::render('Subscriptions/Index');
})->name('subscriptions.index');
