import Record from '@osm/Models/Record';
import {
  Attr,
  Model
} from 'spraypaint';

@Model()
export default class TipoAttivita extends Record {
  static jsonapiType: string = 'attivita__tipi';

  @Attr() codice!: string;
  @Attr() descrizione!: string;
  @Attr() addebitoOrario!: number;
  @Attr() addebitoKm!: number;
  @Attr() addebitoDirittoChiamata!: number;
  @Attr() costoOrarioTecnico!: number;
  @Attr() costoKmTecnico!: number;
  @Attr() costoDirittoChiamataTecnico!: number;
  @Attr() tempoStandard!: number;
}
