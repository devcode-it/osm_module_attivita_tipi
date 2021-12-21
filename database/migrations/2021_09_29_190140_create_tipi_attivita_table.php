<?php /** @noinspection UnusedFunctionResultInspection */

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTipiAttivitaTable extends Migration
{
    public function up(): void
    {
        Schema::create('attivita_tipi', function (Blueprint $table) {
            $table->id();
            $table->string('codice', 25);
            $table->string('descrizione', 255);
            $table->unsignedDecimal('addebito_orario', 12, 4);
            $table->unsignedDecimal('addebito_km', 12, 4);
            $table->unsignedDecimal('addebito_diritto_chiamata', 12, 4);
            $table->unsignedDecimal('costo_orario_tecnico', 12, 4);
            $table->unsignedDecimal('costo_km_tecnico', 12, 4);
            $table->unsignedDecimal('costo_diritto_chiamata_tecnico', 12, 4);
            $table->unsignedDecimal('tempo_standard', 10, 4)->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('attivita-tipi');
    }
}
