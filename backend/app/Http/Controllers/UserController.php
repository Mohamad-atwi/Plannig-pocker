<?php

namespace App\Http\Controllers;

use App\Models\user;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //GetAll or filter
        $users = User::all();
        return response()->json([
            'users' => $users
        ],200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request)
    {
        //Create a new user
        try {   
            $user = User::factory()->create($request->all());
            return response()->json([
                'message' => "User successfully created."
            ],200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Error!"
            ],500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //get user by id
    $users = User::find($id);
    if(!$users){
        return response()->json([
            'message'=>'User Not Found.'
        ],404);
    }
    return response()->json([
        'user' => $users
    ],200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UserRequest $request, $id)
    {
        //update user
        try {
            $user = User::find($id);
            if (!$user) {
                return response()->json([
                    'message' => 'User Not Found.'
                ], 404);
            }

            $user->username = $request->username;
            $user->password = $request->password;
            $user->save();

            return response()->json([
                'message' => "User successfully updated."
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'message' => "Error!"
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // delete user 
        $users = User::find($id);
        if(!$users){
          return response()->json([
             'message'=>'User Not Found.'
          ],404);
        }
    
        // Delete Post
        $users->delete();
    
        // Return Json Response
        return response()->json([
            'message' => "User successfully deleted."
        ],200);
    }
}
