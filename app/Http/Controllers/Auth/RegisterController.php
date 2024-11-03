<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class RegisterController extends Controller
{
	public function index()
	{
		return Inertia::render('register/index');
	}

	public function register(RegisterRequest $request)
	{
		User::create([
			'name' => $request->name,
			'email' => $request->email,
			'password' => Hash::make($request->password),
		]);

		return redirect(route('login.index'))->with('success', 'Conta criada com sucesso!');
	}
}
