import '@material/web/textfield/filled-text-field.js';

import AddEditRecordDialog from '@osm/Components/Dialogs/AddEditRecordDialog';
import {RecordDialogAttributes} from '@osm/Components/Dialogs/RecordDialog';
import collect, {Collection} from 'collect.js';
import {
  Children,
  Vnode,
  VnodeDOM
} from 'mithril';
import Stream from 'mithril/stream';

import TipoAttivita from '../Models/TipoAttivita';

export default class RecordDialog extends AddEditRecordDialog<TipoAttivita> {
  oninit(vnode: Vnode<RecordDialogAttributes<TipoAttivita>, this>) {
    super.oninit(vnode);
    // @ts-ignore
    vnode.attrs.style = '--md-dialog-container-max-block-size: 80%; --md-dialog-container-max-inline-size: 90%;';
  }

  onbeforeupdate(vnode: VnodeDOM<RecordDialogAttributes<TipoAttivita>, this>) {
    super.onbeforeupdate(vnode);
    // @ts-ignore
    vnode.attrs.style = '--md-dialog-container-max-block-size: 80%; --md-dialog-container-max-inline-size: 90%;';
  }

  fields(): Collection<Children> {
    return collect({
      codice: <md-filled-text-field label={__('Codice')} maxLength={10} required grid-span="6"/>,
      descrizione: <md-filled-text-field label={__('Descrizione')} required grid-span="6"/>,
      tempoStandard: <md-filled-text-field label={__('Tempo standard')} min="0" max="24" required step="0.01" suffix="ore" type="number" value="0" grid-span="12"
                                           supportingText={__('Valore compreso tra 0,25 - 24 ore. Esempi: 60 minuti = 1 ora; 30 minuti = 0,5 ore; 15 minuti = 0,25 ore')}/>,
      addebitoOrario: <md-filled-text-field label={__('Addebito orario')} required suffix="€" step="0.01" type="number" value="0"/>,
      addebitoKm: <md-filled-text-field label={__('Addebito km')} required suffix="€" step="0.01" type="number" value="0"/>,
      addebitoDirittoChiamata: <md-filled-text-field label={__('Addebito diritto di chiamata')} required suffix="€" step="0.01" type="number" value="0"/>,
      costoOrarioTecnico: <md-filled-text-field label={__('Costo orario tecnico')} required suffix="€" step="0.01" type="number" value="0"/>,
      costoKmTecnico: <md-filled-text-field label={__('Costo km tecnico')} required suffix="€" step="0.01" type="number" value="0"/>,
      costoDirittoChiamataTecnico: <md-filled-text-field label={__('Costo diritto di chiamata tecnico')} required suffix="€" step="0.01" type="number" value="0"/>
    });
  }

  formContents(): Children {
    const fields = this.formFields();
    return (
      <>
        <md-layout-grid>
          {fields.only(['codice', 'descrizione', 'tempoStandard']).values().all()}
        </md-layout-grid>
        <h5>{__('Addebiti unari al cliente')}</h5>
        <md-layout-grid>
          {fields.only(['addebitoOrario', 'addebitoKm', 'addebitoDirittoChiamata']).values().all()}
        </md-layout-grid>
        <h5>{__('Costi unari del tecnico')}</h5>
        <md-layout-grid>
          {fields.only(['costoOrarioTecnico', 'costoKmTecnico', 'costoDirittoChiamataTecnico']).values().all()}
        </md-layout-grid>
      </>
    );
  }

  protected formState = {
    codice: Stream(''),
    descrizione: Stream(''),
    tempoStandard: Stream(0),
    addebitoOrario: Stream(0),
    addebitoKm: Stream(0),
    addebitoDirittoChiamata: Stream(0),
    costoOrarioTecnico: Stream(0),
    costoKmTecnico: Stream(0),
    costoDirittoChiamataTecnico: Stream(0)
  };

  protected modelType = TipoAttivita;
}
