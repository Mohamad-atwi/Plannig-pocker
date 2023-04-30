<?php

namespace App\Http\Controllers;

use App\Models\Session;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Http\Response;



class AuthSessionController extends Controller
{

    public function store(Request $request)
    {
        $session = Session::where('connectionId', $request->connectionId)
            ->where('password', $request->password)->first();
        if ($session) {
            session()->regenerate();

            return response()->json([
                'message' => "Join Session Successfully !",
                'session' => $session
            ], 200);
        }

        return response()->json([
            'message' => "Join Session Failed !",
        ], 203);
    }


}
