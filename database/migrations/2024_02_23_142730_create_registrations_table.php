<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('registrations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('conference');
            $table->string('association');
            $table->string('church');
            $table->string('payment_id')->default("pending");
            $table->boolean('foreigner')->default(false);
            $table->bigInteger("time")->default(time());
            $table->string("day")->default(date("d"));
            $table->string("month")->default(date("m"));
            $table->string("year")->default(date("Y"));
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registrations');
    }
};
