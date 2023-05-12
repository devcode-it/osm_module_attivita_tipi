<?php

// Le routes WEB possono essere definite qui


use Illuminate\Support\Facades\Route;

Route::inertia('attivita/tipi', 'openstamanager/attivita.tipi::Records')
    ->name('attivita.tipi');
