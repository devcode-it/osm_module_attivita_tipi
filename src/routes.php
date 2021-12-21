<?php /** @noinspection UnusedFunctionResultInspection */

use Openstamanager\TipiAttivita\Http\Controllers\Api\TipoAttivitaController;

Route::inertia('attivita/tipi', 'openstamanager/attivita.tipi::Records')
    ->name('attivita.tipi');
Route::prefix('api')->group(function () {
    Route::apiResource('attivita/tipi', TipoAttivitaController::class);
});
