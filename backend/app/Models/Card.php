<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Card extends Model
{
    use HasFactory;

    protected $guarded = [
        'id',
    ];

    protected $fillable = [
        'value',
        'deck_id'
    ];

    public function deck()
    {
        return $this->belongsToMany(Deck::class);
    }
}
