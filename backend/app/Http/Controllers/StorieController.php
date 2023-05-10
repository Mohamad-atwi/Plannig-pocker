<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Storie;
// use Illuminate\Http\Request;
use Illuminate\Http\Response;
class StorieController extends Controller
{
    //
     /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $storie = Storie::all();;
        return response()->json([
            'storie' => $storie
        ], 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Storie $request)
    {
        try {
            $storie = Storie::factory()->create($request->all());
            return response()->json([
                'message' => "Storie successfully created.",
                'storie' => $storie,
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
    public function show($id)
    {
        $storie = Storie::find($id);
        if (!$storie) {
            return response()->json([
                'message' => 'Storie Not Found.'
            ], 404);
        }
        return response()->json([
            'storie' => $storie
        ], 200);
    }



    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        try {
            $storie = Storie::find($id);
            if (!$storie) {
                return response()->json([
                    'message' => 'Storie Not Found.'
                ], 404);
            }

            $storie->text = $request->text;
            $storie->terminated = $request->terminated;
            $storie->save();

            return response()->json([
                'message' => "Storie successfully updated."
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
    public function destroy($id)
    {
        $storie = Storie::find($id);
        if (!$storie) {
            return response()->json([
                'message' => 'Storie Not Found.'
            ], 404);
        }
        $storie->delete();

        return response()->json([
            'message' => "Storie successfully deleted."
        ], 200);
    }
}
