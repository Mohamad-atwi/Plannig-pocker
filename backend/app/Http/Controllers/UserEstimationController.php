<?php

namespace App\Http\Controllers;

use App\Events\VotingEvent;
use App\Models\UserEstimation;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserEstimationRequest;


class UserEstimationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //Display all user estimations
        //GET
        //http://127.0.0.1:8000/user_estimations/10
        $user_estimations = UserEstimation::all();
        return response()->json([
            'user_estimations' => $user_estimations
        ], 200);
    }

    // /**
    //  * Store a newly created resource in storage.
    //  */
    public function store(Request $request)
    {
        //Create a new user estimation
        //POST
        //http://127.0.0.1:8000/user_estimations
        //JSON FILE: body: {"user_id": 1,"session_id": 1,"card_id": 1}
        try {
            $user_estimations = UserEstimation::factory()->create($request->all());
            VotingEvent::dispatchIf($user_estimations, $user_estimations->session_id);
            return response()->json([
                'message' => "UserEstimation successfully created."
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Error!"
            ], 500);
        }
    }
    // /**
    //  * Display the specified resource.
    //  */
    public function show($id)
    {
        //show user estimation by id
        //GET
        //http://127.0.0.1:8000/user_estimations/1
        $user_estimations = UserEstimation::find($id);
        if (!$user_estimations) {
            return response()->json([
                'message' => 'User estimation Not Found.'
            ], 404);
        }
        return response()->json([
            'user_estimations' => $user_estimations
        ], 200);
    }

    // /**
    //  * Update the specified resource in storage.
    //  */
    public function update(UserEstimationRequest $request, $id)
    {
        //Update an user estimation
        //PUT
        //JSON FILE: body: {    "user_id": 1,    "session_id": 1,    "card_id": 1}
        //http://127.0.0.1:8000/user_estimations/6
        try {
            $user_estimations = UserEstimation::find($id);
            if (!$user_estimations) {
                return response()->json([
                    'message' => 'User estimation Not Found.'
                ], 404);
            }

            $user_estimations->user_id = $request->user_id;
            $user_estimations->session_id = $request->session_id;
            $user_estimations->card_id = $request->card_id;
            $user_estimations->save();

            return response()->json([
                'message' => "User estimation successfully updated."
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Error!"
            ], 500);
        }
    }

    // /**
    //  * Remove the specified resource from storage.

    public function destroy($id)
    {
        //Delete user estimation by giving id
        //DELETE
        //http://127.0.0.1:8000/user_estimations/10
        $user_estimations = UserEstimation::find($id);
        if (!$user_estimations) {
            return response()->json([
                'message' => 'User Not Found.'
            ], 404);
        }

        // Delete Post
        $user_estimations->delete();

        // Return Json Response
        return response()->json([
            'message' => "User successfully deleted."
        ], 200);
    }
    public function getSessionsByUser($userId)
    {
        $sessions = UserEstimation::where('user_id', $userId)
            ->with('session')
            ->get()
            ->pluck('session')
            ->unique();

        return response()->json([
            'sessions' => $sessions
        ], 200);
    }
}
