<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function index() {
        return Inertia::render('login/index');
    }

    public function register()
    {
        return Inertia::render('register/index');
    }
}
