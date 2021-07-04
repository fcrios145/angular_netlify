import { NgModule } from '@angular/core'

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';


import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  exports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule
  ]
})
export class MaterialModule {

}
