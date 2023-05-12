import Model, {
  ModelAttributes,
  ModelRelations
} from '@osm/Models/Model';

// noinspection JSUnusedGlobalSymbols

export interface TipoAttivitaAttributes extends ModelAttributes {
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

export interface TipoAttivitaRelations extends ModelRelations {
}

export default class TipoAttivita extends Model<TipoAttivitaAttributes, TipoAttivitaRelations> {
  static get jsonApiType(): string {
    return 'attivita__tipi';
  }
}
