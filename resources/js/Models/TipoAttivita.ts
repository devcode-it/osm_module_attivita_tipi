import {Model} from 'openstamanager';

// noinspection JSUnusedGlobalSymbols

export default class TipoAttivita extends Model {
  jsonApiType = 'attivita/tipi';

  codice: string;
  descrizione: string;
  addebitoOrario: number;
  addebitoKm: number;
  addebitoDirittoChiamata: number;
  costoOrarioTecnico: number;
  costoKmTecnico: number;
  costoDirittoChiamataTecnico: number;
  tempoStandard: number;
}
