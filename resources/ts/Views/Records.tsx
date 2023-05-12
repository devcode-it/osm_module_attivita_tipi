// noinspection JSUnusedGlobalSymbols

import {RecordsTableColumnAttributes} from '@osm/Components/DataTable/RecordsTable';
import RecordsTableColumn from '@osm/Components/DataTable/RecordsTableColumn';
import RecordsPage from '@osm/Components/Pages/RecordsPage';
import collect, {Collection} from 'collect.js';
import {Children} from 'mithril';

import RecordDialog from '../Dialogs/RecordDialog';
import TipoAttivita from '../Models/TipoAttivita';

export default class Records extends RecordsPage<TipoAttivita, RecordDialog> {
  modelType = TipoAttivita;
  recordDialogType = RecordDialog;
  tableColumns(): Collection<Children> | Collection<RecordsTableColumnAttributes> | Collection<Children | RecordsTableColumnAttributes> {
    return collect({
      codice: <RecordsTableColumn sortable filterable>{__('Codice')}</RecordsTableColumn>,
      descrizione: <RecordsTableColumn sortable filterable>{__('Descrizione')}</RecordsTableColumn>,
      addebitoOrario: <RecordsTableColumn type="numeric" sortable filterable>{__('Addebito orario')}</RecordsTableColumn>,
      addebitoKm: <RecordsTableColumn type="numeric" sortable filterable>{__('Addebito km')}</RecordsTableColumn>,
      addebitoDirittoChiamata: <RecordsTableColumn type="numeric" sortable filterable>{__('Addebito diritto di chiamata')}</RecordsTableColumn>,
      costoOrarioTecnico: <RecordsTableColumn type="numeric" sortable filterable>{__('Costo orario tecnico')}</RecordsTableColumn>,
      costoKmTecnico: <RecordsTableColumn type="numeric" sortable filterable>{__('Costo km tecnico')}</RecordsTableColumn>,
      costoDirittoChiamataTecnico: <RecordsTableColumn type="numeric" sortable filterable>{__('Costo diritto di chiamata tecnico')}</RecordsTableColumn>
    });
  }
}
