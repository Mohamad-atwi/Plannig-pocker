<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserEstimation extends Model
{
    use HasFactory;
    protected $guarded = [
        'id',
    ];

    protected $fillable = [
        'user-id',
        'session-id',
        'card-id'
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function session()
    {
        return $this->belongsTo(Session::class);
    }

    public function card()
    {
        return $this->belongsTo(Card::class);
    }
}
