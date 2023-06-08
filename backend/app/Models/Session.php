<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Session extends Model
{
    use HasFactory;

    protected $guarded = [
        'id',
    ];

    protected $fillable = [
        'connectionId',
        'password',
        'title',
        'owner_id',
        'deck_id',
        'terminated'
    ];

    public function deck()
    {
        return $this->hasOne(Deck::class);
    }

    public function owner()
    {
        return $this->belongsTo(User::class, 'owner_id' );
    }

    public function estimations()
    {
        return $this->hasMany(UserEstimation::class);
    }

    public function stories()
    {
        return $this->hasMany(Storie::class);
    }

}
