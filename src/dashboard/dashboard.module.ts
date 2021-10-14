import { NgModule } from '@angular/core'
// import { RouterModule } from '@angular/router'
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common'

import { DashboardComponent } from './containers/dashboard.component'
import { MaterialModule } from '../app/material/material.module'



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,

    MaterialModule

  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule {

}
