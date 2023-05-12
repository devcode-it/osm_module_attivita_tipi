/**
 * Questo file viene utilizzato per tutte le operazioni da eseguire prima del caricamento e del rendering del componente
 * principale di OpenSTAManager.
 * Ad esempio, è possibile utilizzare questo file per inizializzare librerie esterne, utilizzare funzioni extend, override, ecc.
 * Se non utilizzato, il file non può essere eliminato ma deve rimanere vuoto.
 */

import {mdiFormatListBulleted} from '@mdi/js';
import {extend} from '@osm/Components/extend/extend';
import Drawer from '@osm/Components/layout/Drawer';
import {DrawerEntry} from '@osm/Components/layout/DrawerEntry';
import {VnodeCollection} from '@osm/typings/jsx';

extend(
  Drawer.prototype,
  'entries',
  (entries: VnodeCollection) => entries.put(__('Tipi attività'), <DrawerEntry route="attivita.tipi" icon={mdiFormatListBulleted}>{__('Tipi attività')}</DrawerEntry>)
);
