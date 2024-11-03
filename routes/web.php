<?php

use App\Http\Controllers\LoginController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function() { 
    Route::get('/login', [LoginController::class, 'index'])
        ->name('login.index');

    Route::get('/register', [LoginController::class, 'register'])
        ->name('register.index');
});


Route::middleware('auth')->group(function() {
    Route::get('/', function () {
        return view('welcome');
    });
});