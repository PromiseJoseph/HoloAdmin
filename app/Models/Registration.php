<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registration extends Model
{
    use HasFactory;

    protected $table= "registrations";

    protected $hidden=["created_at", "updated_at"];

    protected $fillable = [
        "name",
        "conference",
        "association",
        "church",
        "payment_id",
        "foreigner",
    ]; 
}
