import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ISession } from './core/interfaces/session.interface';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private http: HttpClient) { }
  title = 'Proyect';
  
  private loggedIn: boolean = false;
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZ2l2ZW5fbmFtZSI6Ik1hdGVvIiwiZmFtaWx5X25hbWUiOiJNb250aSIsIm5iZiI6MTY3MDI5MjU4OSwiZXhwIjoxNjcwMjk2MTg5LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdCIsImF1ZCI6ImFnZW5kYWFwaSJ9.wuebD_ekS7wwYUi_ks-y0xqOxqp8mZs3lCPaaErhFm4'
    })
  };
  
  public async Conectar(){
 
    const res = await fetch('https://localhost:7924/api/Contact', {      
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZ2l2ZW5fbmFtZSI6Ik1hdGVvIiwiZmFtaWx5X25hbWUiOiJNb250aSIsIm5iZiI6MTY3MDI5MjU4OSwiZXhwIjoxNjcwMjk2MTg5LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdCIsImF1ZCI6ImFnZW5kYWFwaSJ9.wuebD_ekS7wwYUi_ks-y0xqOxqp8mZs3lCPaaErhFm4'
    },})
  }
    getSession(): ISession {
      const item: string = localStorage.getItem('session') || 'invalid';
      if (item !== 'invalid') {
        this.loggedIn = true;
        return JSON.parse(item);
      }
      return { expiresIn: '', token: '' };
    }
    
    setUserId(id : string){//******
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