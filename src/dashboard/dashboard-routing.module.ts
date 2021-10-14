import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './containers/dashboard.component';
import { UsersComponent } from '../users/containers/users.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: UsersComponent,
        children: [
            {
                path: 'users',
                component: UsersComponent
            }
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }