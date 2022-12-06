import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewDispositivoRoutingModule } from './view-dispositivo-routing.module';
import { ViewDispositivoComponent } from './view-dispositivo.component';


@NgModule({
  declarations: [
    ViewDispositivoComponent
  ],
  imports: [
    CommonModule,
    ViewDispositivoRoutingModule
  ]
})
export class ViewDispositivoModule { }
