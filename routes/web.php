<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function() { 
    Route::get('/login', [LoginController::class, 'index'])
        ->name('login.index');
});


Route::middleware('auth')->group(function() {
    Route::get('/', function () {
        return view('welcome');
    });
});