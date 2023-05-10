<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CardController;
use App\Http\Controllers\DeckController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserEstimationController;
use App\Http\Controllers\AuthSessionController;
use App\Http\Controllers\StorieController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware(['cors'])->group(function () {
    Route::get('cards', [CardController::class, 'index']);
    Route::get('cards/{card}', [CardController::class, 'show']);

    Route::get('decks', [DeckController::class, 'index']);
    Route::get('decks/{deck}', [DeckController::class, 'show']);
    Route::get('decks/{deck}/cards', [DeckController::class, 'showCards']);

    Route::get('sessions', [SessionController::class, 'index']);
    Route::get('sessions/{session}/estimations', [SessionController::class, 'showEstimations']);
    Route::get('sessions/{session}', [SessionController::class, 'show']);
    Route::post('sessions', [SessionController::class, 'store']);
    Route::put('sessions/{session}', [SessionController::class, 'update']);
    Route::delete('sessions/{session}', [SessionController::class, 'destroy']);
    Route::post('join', [AuthSessionController::class, 'store']);

    Route::get('users', [UserController::class, 'index']);
    Route::get('users/{id}', [UserController::class, 'show']);
    Route::post('users', [UserController::class, 'store']);
    Route::put('users/{id}', [UserController::class, 'update']);
    Route::delete('users/{id}', [UserController::class, 'destroy']);

    Route::post('login', [AuthController::class, 'store']);
    Route::post('logout', [AuthController::class, 'destroy']);

    Route::get('user_estimations', [UserEstimationController::class, 'index']);
    Route::get('user_estimations/{id}', [UserEstimationController::class, 'show']);
    Route::post('user_estimations', [UserEstimationController::class, 'store']);
    Route::put('user_estimations/{id}', [UserEstimationController::class, 'update']);
    Route::delete('user_estimations/{id}', [UserEstimationController::class, 'destroy']);

    Route::get('/decks', [DeckController::class, 'index']);
    Route::get('/decks/{deck}', [DeckController::class, 'show']);
    Route::get('/decks/{deck}/cards', [DeckController::class, 'showCards']);
    Route::get('/users', [UserController::class, 'index']);

    Route::get('stories', [StorieController::class, 'index']);
    Route::get('stories/{id}', [StorieController::class, 'show']);
    Route::post('stories', [StorieController::class, 'store']);
    Route::put('stories/{id}', [StorieController::class, 'update']);
    Route::delete('stories/{id}', [StorieController::class, 'destroy']);
});
