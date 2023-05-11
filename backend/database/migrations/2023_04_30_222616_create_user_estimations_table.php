<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_estimations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('session_id');
            $table->unsignedBigInteger('card_id');
            $table->unsignedBigInteger('story_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('session_id')->references('id')->on('sessions');
            $table->foreign('card_id')->references('id')->on('cards');
            $table->foreign('story_id')->references('id')->on('stories');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_estimations');
    }
};