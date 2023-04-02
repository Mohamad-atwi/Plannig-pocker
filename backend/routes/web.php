<?php

use App\Http\Controllers\CardController;
use App\Http\Controllers\DeckController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserEstimationController;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['cors'])->group(function () {
    Route::get('cards', [CardController::class, 'index']);
    Route::get('cards/{card}', [CardController::class, 'show']);

    Route::get('decks', [DeckController::class, 'index']);
    Route::get('decks/{deck}', [DeckController::class, 'show']);
    Route::get('decks/{deck}/cards', [DeckController::class, 'showCards']);

    Route::get('sessions', [SessionController::class, 'index']);
    Route::get('sessions/{session}', [SessionController::class, 'show']);
    Route::post('sessions', [SessionController::class, 'store']);
    Route::put('sessions/{session}', [SessionController::class, 'update']);
    Route::delete('sessions/{session}', [SessionController::class, 'destroy']);

    Route::get('users',[UserController::class,'index']);
    Route::get('users/{id}', [UserController::class, 'show']);
    Route::post('users', [UserController::class, 'store']);
    Route::put('users/{id}', [UserController::class, 'update']);
    Route::delete('users/{id}', [UserController::class, 'destroy']);


    Route::get('user_estimations',[UserEstimationController::class,'index']);
    Route::get('user_estimations/{id}', [UserEstimationController::class, 'show']);
    Route::post('user_estimations', [UserEstimationController::class, 'store']);
    Route::put('user_estimations/{id}', [UserEstimationController::class, 'update']);
    Route::delete('user_estimations/{id}', [UserEstimationController::class, 'destroy']);

   Route::get('/decks', [DeckController::class, 'index']);
    Route::get('/decks/{deck}', [DeckController::class, 'show']);
    Route::get('/decks/{deck}/cards', [DeckController::class, 'showCards']);
    Route::get('/users', [UserController::class, 'index']);
});
