<?php
 
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
 
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('image');
            $table->text('description');
            $table->text('company');
            $table->text('formula');
            $table->date('expiryDate');
            $table->integer('quantity');
            $table->text('medType');
            $table->text('storageConditions');
            $table->text('precautions');
            $table->integer('price');
            $table->timestamps();
        });
    }
 
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};