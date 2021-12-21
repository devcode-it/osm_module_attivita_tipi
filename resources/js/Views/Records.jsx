import {type ColumnT, type SectionT, RecordsPage} from 'openstamanager';

import TipoAttivita from '../Models/TipoAttivita';

export default class Records extends RecordsPage {
    columns: {[string]: [string]} | {[string]: ColumnT} = {
      codice: this.__('Codice'),
      descrizione: this.__('Descrizione'),
      addebitoOrario: {
        title: this.__('Addebito orario'),
        type: 'numeric'
      },
      addebitoKm: {
        title: this.__('Addebito km'),
        type: 'numeric'
      },
      addebitoDirittoChiamata: {
        title: this.__('Addebito diritto di chiamata'),
        type: 'numeric'
      },
      costoOrarioTecnico: {
        title: this.__('Costo orario tecnico'),
        type: 'numeric'
      },
      costoKmTecnico: {
        title: this.__('Costo km tecnico'),
        type: 'numeric'
      },
      costoDirittoChiamataTecnico: {
        title: this.__('Costo diritto di chiamata tecnico'),
        type: 'numeric'
      }
    };

    sections: SectionT[] = [
      {
        fields: {
          codice: {
            label: this.__('Codice'),
            maxLength: 10,
            required: true
          },
          descrizione: {
            label: this.__('Descrizione'),
            required: true
          },
          tempoStandard: {
            label: this.__('Tempo standard'),
            helper: this.__('Valore compreso tra 0,25 - 24 ore. Esempi: 60 minuti = 1 ora; 30 minuti = 0,5 ore; 15 minuti = 0,25 ore'),
            min: 0,
            max: 24,
            required: true,
            step: 0.01,
            suffix: 'ore',
            type: 'number',
            value: 0
          }
        }
      },
      {
        heading: this.__('Addebiti unari al cliente'),
        fields: {
          addebitoOrario: {
            label: this.__('Addebito orario'),
            required: true,
            suffix: '€',
            step: 0.01,
            type: 'number',
            value: '0'
          },
          addebitoKm: {
            label: this.__('Addebito km'),
            required: true,
            suffix: '€',
            step: 0.01,
            type: 'number',
            value: 0
          },
          addebitoDirittoChiamata: {
            label: this.__('Addebito diritto di chiamata'),
            required: true,
            suffix: '€',
            step: 0.01,
            type: 'number',
            value: 0
          }
        }
      },
      {
        heading: this.__('Costi unari del tecnico'),
        fields: {
          costoOrarioTecnico: {
            label: this.__('Costo orario'),
            required: true,
            suffix: '€',
            step: 0.01,
            type: 'number',
            value: 0
          },
          costoKmTecnico: {
            label: this.__('Costo km'),
            required: true,
            suffix: '€',
            step: 0.01,
            type: 'number',
            value: 0
          },
          costoDirittoChiamataTecnico: {
            label: this.__('Costo diritto chiamata'),
            required: true,
            suffix: '€',
            step: 0.01,
            type: 'number',
            value: 0
          }
        }
      }
    ];

    model = TipoAttivita;
}
