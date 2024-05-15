<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class FileDetail extends Model
{
    use HasFactory;

    public $fillable = [
        "id",
        "filename",
        

    ];

    
    // public function User() : BelongsTo
    // {
    //     return $this->belongsTo(User::class);
    // }

    public function User(): HasOne
    {
        return $this->hasOne(User::class,"id");
    }
    // public function User() : HasOne
    // {
    //     return $this->hasOne(User::class);
    // }
}
