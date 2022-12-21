import { Component, Input, OnInit } from '@angular/core';
import { IContact } from 'src/app/core/interfaces/contact2';
import { ContactosService } from 'src/app/core/services/contactos.service';



@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit {

  contactsData:IContact[] = [];

  constructor(private cs:ContactosService) { }

  ngOnInit(): void {
    this.GetContacts();
  }
  

 async GetContacts ()  
    {
      this.contactsData = await this.cs.getContacts(); //rellena ContactData con todos los contactos de una agenda
    }
  
}
