import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';  
import { ContactosService } from 'src/app/core/services/contactos.service';

@Component({
  selector: 'app-new-contacts',
  templateUrl: './new-contacts.component.html',
  styleUrls: ['./new-contacts.component.scss']
})
export class NewContactsComponent implements OnInit {

  contactData:ContactJsonPlaceholder = {
    name: '',
    lastname:'',
    telephone:0,
    dispositivos: [],
    description:'',
  };


  constructor(private cs : ContactosService, private router:Router, private ar:ActivatedRoute) { }  //private Cc: ContactCardComponent


   ngOnInit(): void {
    this.ar.params.subscribe(params =>{const sub: any = params['id'] || null;
    
  });
  
  }

  async newcontact(form:NgForm) { 
  console.log(form.value);
  const contactocreado = this.cs.addContact(this.contactData); //ejectua addContact del contact service con los valores del form
  this.router.navigate(['/contacts']); //cuando iniciamos secion nos lleva a contactos if(await contactocreado)
  }


}
