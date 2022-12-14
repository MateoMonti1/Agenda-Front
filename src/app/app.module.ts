import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './public/components/header/header.component';
import { ListaContactosComponent } from './public/pages/lista-contactos/lista-contactos.component';
import { DeleteContactsComponent } from './public/pages/delete-contacts/delete-contacts.component';
import { NewContactsComponent } from './public/pages/new-contacts/new-contacts.component';
import { SignInComponent } from './public/pages/sign-in/sign-in.component';
import { EditContactComponent } from './public/pages/edit-contact/edit-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
     ListaContactosComponent,
     DeleteContactsComponent,
     NewContactsComponent,
     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
