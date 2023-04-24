<?php

namespace App\Http\Controllers;

use App\Models\Deck;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DeckController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $decks = Deck::all();;
        return response()->json($decks, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Deck $deck)
    {
        $deck = Deck::find($deck->id);
        return response()->json($deck, Response::HTTP_OK);
    }

    /**
     * Display the cards of the specified resource.
     */
    public function showCards(Deck $deck)
    {
        $deck = Deck::find($deck->id);
        return response()->json($deck->cards, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Deck $deck)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Deck $deck)
    {
        //
    }
}
