<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;
 
    protected $fillable = [
        'first_name',
        'last_name',
        'home_address',
        'contact_number',
        'email',
        'quantity',
        'orderedProduct'
    ];
}
