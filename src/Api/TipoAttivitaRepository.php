<?php

namespace Openstamanager\TipiAttivita\Api;

use App\Restify\Repository;
use Binaryk\LaravelRestify\Http\Requests\RestifyRequest;
use Illuminate\Database\Eloquent\Model;
use Openstamanager\TipiAttivita\Models\TipoAttivita;

class TipoAttivitaRepository extends Repository
{
    public static string|Model $model = TipoAttivita::class;

    public static string $uriKey = 'attivita__tipi';

    public function fields(RestifyRequest $request): array
    {
        return [
            field('codice')->required()->rules('max:25'),
            field('descrizione')->required()->rules('max:255'),
            field('addebito_orario')->label('addebitoOrario')->required()->rules('numeric'),
            field('addebito_km')->label('addebitoKm')->required()->rules('numeric'),
            field('addebito_diritto_chiamata')->label('addebitoDirittoChiamata')->required()->rules('numeric'),
            field('costo_orario_tecnico')->label('costoOrarioTecnico')->required()->rules('numeric'),
            field('costo_km_tecnico')->label('costoKmTecnico')->required()->rules('numeric'),
            field('costo_diritto_chiamata_tecnico')->label('costoDirittoChiamataTecnico')->required()->rules('numeric'),
            field('tempo_standard')->label('tempoStandard')->rules('numeric'),
            field('created_at')->label('createdAt')->readonly(),
            field('updated_at')->label('updatedAt')->readonly(),
        ];
    }
}
