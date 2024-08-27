<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
 
    protected $fillable = [
        'name', 
        'image', 
        'description',
        'company',
        'formula',
        'expiryDate',
        'quantity',
        'medType',
        'storageConditions',
        'precautions',
        'price'

    ];
}