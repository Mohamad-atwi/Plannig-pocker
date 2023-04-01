<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            //
            'username' => 'required|string|min:5|max:48',
            'password' => 'required|min:8|regex:/^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]+$/',     
           ];
    }

     /**
     * Custom message for validation
     *
     * @return array
     */
    public function messages()
    {
            return [
                'password.regex' => 'The password must be at least 8 characters long and contain at least one letter, one number, and one special character (!@#$%^&*()_+).',
            ];
    }
}
