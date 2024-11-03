<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => 'required|email|max:255|unique:' . User::class,
            'name' => 'required|string|max:255',
            'password' => ['required', 'confirmed', Rules\Password::min(8)->mixedCase()],
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'email.required' => 'Email é obrigatório!',
            'email.email' => 'Email inválido!',
            'email.max:255' => 'Email deve ter no máximo 255 caracteres!',
            'email.unique' => 'Email já cadastrado na plataforma',
            'name.required' => 'Nome é obrigatório!',
            'name.string' => 'Nome deve ser uma sequência de caracteres!',
            'name.max:255' => 'Nome deve ter no máximo 255 caracteres!',
            'password.required' => 'Senha é obrigatória!',
            'password.confirmed' => 'As senhas são diferentes!',
            'password.min' => 'A senha deve ter no mínimo 8 caracteres!',
            'password.mixed' => 'A senha deve conter letras maiúsculas e minúsculas!'
        ];
    }
}
