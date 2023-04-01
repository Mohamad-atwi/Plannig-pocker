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
        'session-id'
    ];
}
