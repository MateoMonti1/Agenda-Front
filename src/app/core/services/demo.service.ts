import { Injectable } from '@angular/core';
import { Contact, contacts } from '../interface/contacts';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

  async getUsers (id:number)//: Promise<Contact> esto iria despues leer aputne
  {

    console.log("Aca te devuelve ");
  
  }

  async DeleteUsers (id:number) 
  {
    console.log ("Devuelve un ok ")
  }
  async AddUsers (Contact : Contact) {


  }

}