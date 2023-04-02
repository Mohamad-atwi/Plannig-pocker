<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    /**
     * Store a newly created resource in storage.
     */
    public function store(AuthRequest $request)
    {
        $user = User::where('username', $request->username)
            ->where('password', $request->password)->first();
        if ($user) {
            session()->regenerate();

            return response()->json([
                'message' => "Login Successfully !",
                'user' => $user
            ], 200);
        }

        return response()->json([
            'message' => "Login Failed !",
        ], 203);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy()
    {
        return response()->json([
            'message' => "Logout Successfully !",
        ], 203);
    }
}
