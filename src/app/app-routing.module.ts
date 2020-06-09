import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { DashboardInfoComponent } from './components/dashboard-info/dashboard-info.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard-info',
    pathMatch: 'full'
  },
  {
    path: 'dashboard-info',
    component: DashboardInfoComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);