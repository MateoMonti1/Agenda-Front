import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditContactRoutingModule } from './edit-contact-routing.module';
import { EditContactComponent } from './edit-contact.component';


@NgModule({
  declarations: [
    EditContactComponent
  ],
  imports: [
    CommonModule,
    EditContactRoutingModule
  ]
})
export class EditContactModule { }
