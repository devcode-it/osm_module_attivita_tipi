<?php

namespace Openstamanager\TipiAttivita\Api;

use App\Restify\Repository;
use Binaryk\LaravelRestify\Http\Requests\RestifyRequest;
use Illuminate\Database\Eloquent\Model;
use Openstamanager\TipiAttivita\Models\TipoAttivita;

class TipoAttivitaRepository extends Repository
{
    public static string|Model $model = TipoAttivita::class;

    public static string $type = 'attivita__tipi';
    public static string $uriKey = 'attivita__tipi';

    public function fields(RestifyRequest $request): array
    {
        return [
            field('codice')->required()->rules('max:25'),
            field('descrizione')->required()->rules('max:255'),
            field('addebito_orario')->required()->rules('numeric'),
            field('addebito_km')->required()->rules('numeric'),
            field('addebito_diritto_chiamata')->required()->rules('numeric'),
            field('costo_orario_tecnico')->required()->rules('numeric'),
            field('costo_km_tecnico')->required()->rules('numeric'),
            field('costo_diritto_chiamata_tecnico')->required()->rules('numeric'),
            field('tempo_standard')->rules('numeric'),
            field('created_at')->readonly(),
            field('updated_at')->readonly(),
        ];
    }
}
