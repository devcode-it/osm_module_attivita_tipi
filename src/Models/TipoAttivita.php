<?php /** @noinspection PhpUnused */

namespace Openstamanager\TipiAttivita\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property string $codice
 * @property string $descrizione
 * @property float $addebito_orario
 * @property float $addebito_km
 * @property float $addebito_diritto_chiamata
 * @property float $costo_orario_tecnico;
 * @property float $costo_km_tecnico;
 * @property float $costo_diritto_chiamata_tecnico;
 * @property ?float $tempo_standard = null;
 */
class TipoAttivita extends Model
{
    use HasFactory;

    protected $table = 'attivita_tipi';
    protected $fillable = [
        'codice',
        'descrizione',
        'addebito_orario',
        'addebito_km',
        'addebito_diritto_chiamata',
        'costo_orario_tecnico',
        'costo_km_tecnico',
        'costo_diritto_chiamata_tecnico',
        'tempo_standard'
    ];
}
