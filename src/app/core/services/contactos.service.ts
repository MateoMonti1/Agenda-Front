import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './authentication.service';

import { BACKEND_URL } from '../constants/backends';
import { Contact, ContactJsonPlaceholder} from '../interfaces/contacts';
import { DispositiveJsonPlaceholder } from '../interfaces/dispositive.interface';
//import { IContact } from '../interfaces/contact.interface';
import { IContact } from '../interfaces/contact2';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private auth:AuthService) { }


  async getContacts(): Promise <ContactJsonPlaceholder[]> {
    const data = await fetch(BACKEND_URL+'/api/Contact',{
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
    });
    return await data.json();
}

async addContact(contact: IContact) : Promise<IContact>{ //: Promise<ContactJsonPlaceholder>
  console.log(contact);
  const res = await fetch(BACKEND_URL+'/api/Contact', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization' :  `Bearer ${this.auth.getSession().token!}`
    },
    body: JSON.stringify(contact)
  });
  return await res.json();
}
 
async getContactDetails(id: number): Promise<ContactJsonPlaceholder> {
  const data = await fetch(BACKEND_URL+'/api/Contact/'+ id,{
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization' :  `Bearer ${this.auth.getSession().token!}`
    },
  });
  return await data.json();
}

}

