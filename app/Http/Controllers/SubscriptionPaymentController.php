<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SubscriptionPaymentController extends Controller
{
    public function confirmPayment(Request $request){
        $plan = [
            'yearly-99' => [
                'name' => 'Yearly Individual Subscription',
                'price' => 467000,
                'interval' => 'year',
                'interval_count' => 1,
                'currency' => 'IDR',
                'fee' => 16000,
                'description' => 'Yearly Subscription'
            ],
        ];

        return Inertia::render('Subscriptions/Index', [
            'plan' => $plan[$request->plan],
        ]);
    }
}
