import {Model} from 'openstamanager';

// noinspection JSUnusedGlobalSymbols
/**
 * @property {string} codice
 * @property {string} descrizione
 * @property {number} addebitoOrario
 * @property {number} addebitoKm
 * @property {number} addebitoDirittoChiamata
 * @property {number} costoOrarioTecnico
 * @property {number} costoKmTecnico
 * @property {number} costoDirittoChiamataTecnico
 * @property {number} tempoStandard
 *
 * @inheritDoc
 */
export default class TipoAttivita extends Model {
  jsonApiType = 'attivita/tipi';
}
