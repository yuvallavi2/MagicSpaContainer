import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { FullLayoutComponent, SimpleLayoutComponent } from './containers';
import {LoginComponent} from './views/login/login.component';

import {MagicShellComponent} from "./views/magic-components/magic-shell/magic-shell.component";
import {MagicComponentsModule} from "./views/magic-components/magic-components.module";
//import {MagicShellComponent} from "@magic/angular";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login' , component: LoginComponent},

  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      { path: 'customers',
        loadChildren: './views/magic-components/magic-components.module#MagicComponentsModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
