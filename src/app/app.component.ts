import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ISession } from './interfaces/session.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  title = 'Proyect';
  private loggedIn: boolean = false;
  public hola(){
   
    let body = {
      UserName: 'string',
      Password: 'string'
    }
    this.http.post('http://localhost:7263/api/Authentication/authenticate', body)
      /* const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      const sub = decodedToken.sub;
      console.log(sub); ///busca el id del usuario
  
      if (!token) return false;
      this.setSession(token);
      this.setUserId(sub); //guarda el id en el local storage */
      
    
    this.http.get('http://localhost:7263/api/Contact').subscribe(x => console.log(x))
  }
    getSession(): ISession {
      const item: string = localStorage.getItem('session') || 'invalid';
      if (item !== 'invalid') {
        this.loggedIn = true;
        return JSON.parse(item);
      }
      return { expiresIn: '', token: '' };
    }
    
    setUserId(id : string){//**************
      localStorage.setItem('Id', id);
    }

    setSession(token: any, expiresTimeHours: number = 1) {
      const date = new Date();
      date.setHours(date.getHours() + expiresTimeHours);//la hora actual+la cantidad de horas validas del token
  
      const session: ISession = {
        expiresIn: new Date(date).toISOString(),
        token,
      };
  
      this.loggedIn = true;
      localStorage.setItem('session', JSON.stringify(session));
      //window.location.reload();
    }
  }
