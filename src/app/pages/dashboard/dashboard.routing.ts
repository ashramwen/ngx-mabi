import { RouterModule, Routes } from '@angular/router';

import { CommerceResolve } from './../shared/resolves/commerce-resolve';
import { Dashboard } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    // resolve: {
    //   commerce: CommerceResolve
    // }
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
