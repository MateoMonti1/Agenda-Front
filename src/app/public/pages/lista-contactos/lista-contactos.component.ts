import { Component, OnInit } from '@angular/core';

import {name_contacts, Name_Contact} from 'src/app/core/interfaces/contacts'

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.scss']
})
export class ListaContactosComponent implements OnInit {

  name_contacts:Name_Contact[] = name_contacts;
  constructor() { }

  ngOnInit(): void {
  }

}
