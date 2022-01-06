import { Model, RecordsPage, __ } from 'openstamanager';

class TipoAttivita extends Model {
  jsonApiType = "attivita/tipi";
}

class Records extends RecordsPage {
  columns = {
    codice: __("Codice"),
    descrizione: __("Descrizione"),
    addebitoOrario: {
      title: __("Addebito orario"),
      type: "numeric"
    },
    addebitoKm: {
      title: __("Addebito km"),
      type: "numeric"
    },
    addebitoDirittoChiamata: {
      title: __("Addebito diritto di chiamata"),
      type: "numeric"
    },
    costoOrarioTecnico: {
      title: __("Costo orario tecnico"),
      type: "numeric"
    },
    costoKmTecnico: {
      title: __("Costo km tecnico"),
      type: "numeric"
    },
    costoDirittoChiamataTecnico: {
      title: __("Costo diritto di chiamata tecnico"),
      type: "numeric"
    }
  };
  sections = [
    {
      fields: {
        codice: {
          label: __("Codice"),
          maxLength: 10,
          required: true
        },
        descrizione: {
          label: __("Descrizione"),
          required: true
        },
        tempoStandard: {
          label: __("Tempo standard"),
          helper: __("Valore compreso tra 0,25 - 24 ore. Esempi: 60 minuti = 1 ora; 30 minuti = 0,5 ore; 15 minuti = 0,25 ore"),
          min: 0,
          max: 24,
          required: true,
          step: 0.01,
          suffix: "ore",
          type: "number",
          value: "0"
        }
      }
    },
    {
      heading: __("Addebiti unari al cliente"),
      fields: {
        addebitoOrario: {
          label: __("Addebito orario"),
          required: true,
          suffix: "\u20AC",
          step: 0.01,
          type: "number",
          value: "0"
        },
        addebitoKm: {
          label: __("Addebito km"),
          required: true,
          suffix: "\u20AC",
          step: 0.01,
          type: "number",
          value: "0"
        },
        addebitoDirittoChiamata: {
          label: __("Addebito diritto di chiamata"),
          required: true,
          suffix: "\u20AC",
          step: 0.01,
          type: "number",
          value: "0"
        }
      }
    },
    {
      heading: __("Costi unari del tecnico"),
      fields: {
        costoOrarioTecnico: {
          label: __("Costo orario"),
          required: true,
          suffix: "\u20AC",
          step: 0.01,
          type: "number",
          value: "0"
        },
        costoKmTecnico: {
          label: __("Costo km"),
          required: true,
          suffix: "\u20AC",
          step: 0.01,
          type: "number",
          value: "0"
        },
        costoDirittoChiamataTecnico: {
          label: __("Costo diritto chiamata"),
          required: true,
          suffix: "\u20AC",
          step: 0.01,
          type: "number",
          value: "0"
        }
      }
    }
  ];
  model = TipoAttivita;
}

export { Records, TipoAttivita };
