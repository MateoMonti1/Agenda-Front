import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { iAuthRequest, iRegisterRequest } from 'src/app/core/interfaces/auth';
import { AuthService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(private auth:AuthService, private router:Router) { }
  
  registerData:iRegisterRequest = {
    Name:"",
    LastName:"",
    Email:"",
    Password:"",
    UserName:""
  };


  async registrarme(form:NgForm){
    console.log(form.value);
    const user = await this.auth.addUser(form.value);//ejectua addUser del auth service con los valores del form
    if(user) this.router.navigate(['']); //cuando nos registramos nos lleva al inicio de sesion
  }
  
 
  

}
