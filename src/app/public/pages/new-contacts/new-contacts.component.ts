import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//import { IContact } from 'src/app/core/interfaces/contact.interface';
import { IContact } from 'src/app/core/interfaces/contact2';
import { IDispositivo } from 'src/app/core/interfaces/dispositivos';
import { ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import { DispositiveJsonPlaceholder } from 'src/app/core/interfaces/dispositive.interface';
import { ContactosService } from 'src/app/core/services/contactos.service';

@Component({
  selector: 'app-new-contacts',
  templateUrl: './new-contacts.component.html',
  styleUrls: ['./new-contacts.component.scss']
})
export class NewContactsComponent implements OnInit {

  input1Value = '';
  showInputs = false;

  contactData:ContactJsonPlaceholder = {
    name: '',
    userID: 0,
    id: 0,
    dispositivos: []
  };

  dispositivo : IDispositivo = 
  {
    number : "1",
    description : "hola",
    type: 0

  }

  dispositiveData: DispositiveJsonPlaceholder = {
    TelephoneNumber:'',
    DescriptionType: '',
    Type: 0
  };
  
  constructor(private cs : ContactosService, private router:Router, private ar:ActivatedRoute) { }  //private Cc: ContactCardComponent


   ngOnInit(): void {
    this.ar.params.subscribe(params =>{const sub: any = params['id'] || null;
    
  });
  
  }
/*
  async newcontact(form:NgForm) { 
  console.log(form.value, "valor formulario");
  const descipcion = form.value.descipcion;
  const tipo = form.value.tipo;
  const n2 = form.value.TelephoneNumber
  const dispositivo: IDispositivos = {
    number : n2,
    description : descipcion,
    type: tipo
  }

  const contacto : IContact = {
      name:form.value.
      dispositivos: dispositivo,
      userId: form.value.userId
  }
  const contactocreado = await this.cs.addContact(contacto); //ejectua addContact del contact service con los valores del form
  this.router.navigate(['/lista-contactos']); //cuando iniciamos secion nos lleva a contactos if(await contactocreado)
  }
  */

  async onSubmit(form: NgForm) {
    const formValue = form.value;
    const contactData: IContact = {
      name: formValue.name,
      dispositivos: [{
        number: formValue.num,
        description: formValue.description,
        type: formValue.type,
      }],
      userId: formValue.userId
    };
    console.log(contactData)
    const contactocreado = await this.cs.addContact(contactData); //ejectua addContact del contact service con los valores del form
    this.router.navigate(['/lista-contactos']); //cuando iniciamos secion nos lleva a contactos if(await contactocreado)
    console.log(contactData);
  }
}
