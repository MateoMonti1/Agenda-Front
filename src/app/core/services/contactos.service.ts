import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BACKEND_URL } from '../constants/backends';
import { Contact } from '../interfaces/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private http: HttpClient) { }


  async getContacts(): Promise<Contact[]> {
    const data = await fetch(BACKEND_URL+'api/Contact');
    return await data.json();
}
}