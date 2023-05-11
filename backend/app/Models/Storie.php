<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Storie extends Model
{
    use HasFactory;
    protected $guarded = [
        'id',
    ];

    protected $fillable = [
        'text',
        'session_id'
    ];

    public function owner()
    {
        return $this->belongsTo(Session::class, 'session_id' );
    }
}
