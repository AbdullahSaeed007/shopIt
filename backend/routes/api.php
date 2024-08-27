<?php
 
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;
 
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
 
Route::get('products', [ProductController::class, 'index']); 
Route::get('products/{id}', [ProductController::class, 'show']); 
Route::post('products', [ProductController::class, 'store']); 
Route::put('productsupdate/{id}', [ProductController::class, 'update']);
Route::delete('productdelete/{id}', [ProductController::class, 'destroy']);
Route::post('/orders', [OrderController::class, 'store']);
Route::get('orders', [OrderController::class, 'index']);
Route::get('ordersCount', [OrderController::class, 'getCount']);
Route::delete('ordersdelete/{id}', [OrderController::class, 'destroy']);
Route::get('/search/{searchTerm}', [ProductController::class, 'search']);