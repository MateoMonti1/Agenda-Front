import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iAuthRequest } from 'src/app/core/interfaces/auth';
import { AuthService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }
  ngOnInit(): void {
  
  }

  
  authData:iAuthRequest = {
    userName : "",
    password : ""
  };


  async login(form:NgForm){
    console.log(form.value);
    const token = await this.auth.login(form.value);
    if(token) this.router.navigate(['/lista-contactos']); 
  }

}
