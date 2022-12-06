import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditDispositivoRoutingModule } from './edit-dispositivo-routing.module';
import { EditDispositivoComponent } from './edit-dispositivo.component';


@NgModule({
  declarations: [
    EditDispositivoComponent
  ],
  imports: [
    CommonModule,
    EditDispositivoRoutingModule
  ]
})
export class EditDispositivoModule { }
