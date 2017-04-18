import { RouterModule, Routes }  from '@angular/router';

import { Notebook } from './notebook.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Notebook,
    children: [
      //{ path: 'ckeditor', component: Ckeditor }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
