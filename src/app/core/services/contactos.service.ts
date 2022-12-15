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


  GetContacts (): Observable<Contact[]>{

   return this.http.get<Contact[]>(BACKEND_URL+'api/Contact')
  }
}
