import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewDispositivoRoutingModule } from './new-dispositivo-routing.module';
import { NewDispositivoComponent } from './new-dispositivo.component';


@NgModule({
  declarations: [
    NewDispositivoComponent
  ],
  imports: [
    CommonModule,
    NewDispositivoRoutingModule
  ]
})
export class NewDispositivoModule { }
