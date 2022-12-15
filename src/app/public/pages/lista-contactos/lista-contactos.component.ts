import { Component, Input, OnInit } from '@angular/core';
import { ContactosService } from 'src/app/core/services/contactos.service';

import {Contact} from 'src/app/core/interfaces/contacts'

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit {

  
  constructor(private _contactosServices:ContactosService) { }


  @Input() contac : Contact = {
    id= 0,
    name = '',
    user_id = 0,


  }


  ngOnInit(): void {
    this.GetContacts();
  }
  

  GetContacts(){

    this._contactosServices.GetContacts().subscribe(data =>{
      this.contac.name= data
    })
  } 
}
