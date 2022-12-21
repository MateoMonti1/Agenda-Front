import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './authentication.service';

import { BACKEND_URL } from '../constants/backends';
import { DispositiveJsonPlaceholder } from '../interfaces/dispositive.interface';
//import { IContact } from '../interfaces/contact.interface';
import { IContact } from '../interfaces/contact2';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private auth:AuthService) { }


  async getContacts(): Promise <IContact[]> {
    const data = await fetch(BACKEND_URL+'/api/Contact',{
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization' :  `Bearer ${this.auth.getSession().token!}`
      },
    });
    return await data.json();
}

async addContact(contactData: IContact) : Promise<IContact>{ //: Promise<ContactJsonPlaceholder>
  console.log(contactData);
  const res = await fetch(BACKEND_URL+'/api/Contact', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Authorization' :  `Bearer ${this.auth.getSession().token!}`
    },
    body: JSON.stringify(contactData)
  });
  return await res.json();
}
 
async getContactDetails(id: number): Promise<IContact> {
  const data = await fetch(BACKEND_URL+'/api/Contact/'+ id,{
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization' :  `Bearer ${this.auth.getSession().token!}`
    },
  });
  return await data.json();
}

async deleteContact(id:number):Promise<boolean>{
  const res = await fetch(BACKEND_URL+'/api/Contact/'+id, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json',
      'Authorization' :  `Bearer ${this.auth.getSession().token!}`
    },
  });
  return res.ok;
}

}

