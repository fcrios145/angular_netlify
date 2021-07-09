import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { UsersComponent } from './containers/users.component'
import { MaterialModule } from '../app/material/material.module'



@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MaterialModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule {

}
