<?php

namespace Openstamanager\TipiAttivita\Http\Controllers\Api;

use App\Http\Controllers\Api\ApiController;
use Illuminate\Database\Eloquent\Model;
use Openstamanager\TipiAttivita\Models\TipoAttivita;

class TipoAttivitaController extends ApiController
{
    protected string|Model $model = TipoAttivita::class;
}
