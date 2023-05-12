<?php /** @noinspection UnusedFunctionResultInspection */

use Illuminate\Support\Facades\Route;

Route::inertia('attivita/tipi', 'openstamanager/attivita.tipi::Records')
    ->name('attivita.tipi');
//Route::prefix('api')->group(function () {
//    Route::apiResource('attivita/tipi', TipoAttivitaRepository::class);
//});
