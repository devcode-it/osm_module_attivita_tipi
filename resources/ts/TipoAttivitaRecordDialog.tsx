import TipoAttivita from './Models/TipoAttivita';
import RecordDialog from '@osm/Components/Dialogs/RecordDialog';
import AddEditRecordDialog from '@osm/Components/Dialogs/AddEditRecordDialog';
import collect, {Collection} from 'collect.js';
import Stream from 'mithril/stream';
import {Children} from 'mithril';
import MdIcon from '@osm/Components/MdIcon';
import {mdiBarcode} from '@mdi/js';

export default class TipoAttivitaRecordDialog extends AddEditRecordDialog<TipoAttivita> {
  fields(): Collection<Children> {
    return collect({
      codice: (
        <md-filled-text-field required label={__('Codice')}>
          <MdIcon icon={mdiBarcode} slot="icon"/>
        </md-filled-text-field>
      ),
    });
  }

  protected formState: Map<string, Stream<unknown>>;
  protected modelType = TipoAttivita;

  save(): boolean | Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
