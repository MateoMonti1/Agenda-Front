import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './public/components/header/header.component';
import { ListaContactosComponent } from './public/pages/lista-contactos/lista-contactos.component';
import { DeleteContactsComponent } from './public/pages/delete-contacts/delete-contacts.component';
import { NewContactsComponent } from './public/pages/new-contacts/new-contacts.component';
import { OkDeleteContactsComponent } from './public/pages/ok-delete-contacts/ok-delete-contacts.component';
import { OkContactComponent } from './public/pages/ok-contact/ok-contact.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
     ListaContactosComponent,
     DeleteContactsComponent,
     NewContactsComponent,
     OkDeleteContactsComponent,
     OkContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
