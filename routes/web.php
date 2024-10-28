<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/login', function () {
    return Inertia::render('login/index');
});