<?php

namespace App\Http\Controllers;

use App\Http\Requests\SessionStoreRequest;
use App\Models\Session;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;

class SessionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sessions = Session::all();;
        return response()->json([
            'sessions' => $sessions
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(SessionStoreRequest $request)
    {
        try {
            $session = Session::factory()->create($request->all());
            return response()->json([
                'message' => "Session successfully created.",
                'session' => $session,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Something went really wrong!"
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Session $session)
    {
        $session = Session::find($session->id);
        if (!$session) {
            return response()->json([
                'message' => 'Session Not Found.'
            ], 404);
        }
        return response()->json([
            'session' => $session
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(SessionStoreRequest $request, Session $session)
    {
        try {
            $session = Session::find($session->id);
            if (!$session) {
                return response()->json([
                    'message' => 'Session Not Found.'
                ], 404);
            }

            $session->title = $request->title;
            $session->terminated = $request->terminated;
            // Update Session
            $session->save();

            return response()->json([
                'message' => "Session successfully updated."
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Something went really wrong!"
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Session $session)
    {
        $session = Session::find($session->id);
        if (!$session) {
            return response()->json([
                'message' => 'Session Not Found.'
            ], 404);
        }
        $session->delete();

        return response()->json([
            'message' => "Session successfully deleted."
        ], 200);
    }
}
