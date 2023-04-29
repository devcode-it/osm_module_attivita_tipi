/* eslint-disable no-var,vars-on-top */
// noinspection ES6ConvertVarToLetConst

import type cash from 'cash-dom';
import type Mithril from 'mithril';
import type {__ as translator} from 'openstamanager';
import type router from 'ziggy-js';

declare global {
  const importPath: string;
  const translations: {[key: string]: string};
  const route: typeof router;

  var $: typeof cash;
  var m: typeof Mithril;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  var __: typeof translator;
}
