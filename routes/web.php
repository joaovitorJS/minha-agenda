<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Dashboard\DashboardController;

Route::middleware('guest')->group(function () {
    Route::get('/login', [LoginController::class, 'index'])
        ->name('login.index');
    Route::post('/login', [LoginController::class, 'login'])
        ->name('login');

    Route::get('/register', [RegisterController::class, 'index'])
        ->name('register.index');
    Route::post('/register', [RegisterController::class, 'register'])
        ->name('register');
});

Route::middleware('auth')->group(function () {
    Route::post('/logout', [LoginController::class, 'logout'])->name('logout');

    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
});
