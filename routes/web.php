<?php

use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Services\Payment\Xendit;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Route;
use App\Services\Payment\VirtualAccounts;
use App\Http\Controllers\SubscriptionPaymentController;

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

Route::get('subscription', [SubscriptionPaymentController::class, 'confirmPayment'])->name('subscriptions.index');


Route::post('callback/fvapaid', function(Request $request){
    $data = $request->all();
    Log::info($data );
    return response(200);
});

Route::post('pay/{method}', function(Request $request, $method){
    Xendit::setApiKey('xnd_development_Bz9hJsWn1sZiPakhMu6peaTMh2zYI2oXlABLpKfF74UahsyEGcgWBrxCmDCw2mFK');
    $paymentMethod = preg_match('/-/', $method) ? Str::upper(explode('-', $method)[1]) : Str::upper(explode('-', $method)[0]);

    $params = [
        "external_id" => "va-1475804036622",
        "bank_code" => $paymentMethod,
        "name" => "Michael Chen"
      ];

    $createVirtualAccount = VirtualAccounts::create($params);

    return response()->json($createVirtualAccount);
});
