import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'src/app/core/interfaces/contact2';
import { IDispositivo } from 'src/app/core/interfaces/dispositivos';
import { DispositiveJsonPlaceholder } from 'src/app/core/interfaces/dispositive.interface';
import { ContactosService } from 'src/app/core/services/contactos.service';

@Component({
  selector: 'app-new-contacts',
  templateUrl: './new-contacts.component.html',
  styleUrls: ['./new-contacts.component.scss'],
})
export class NewContactsComponent implements OnInit {
  input1Value = '';
  showInputs = false;
  showInput = false;
  typeDispositivo = ['CelularNumber', 'PhoneNumber', 'Fax'];
  toggleInput() {
    this.contactData.dispositivos.push({
      ...this.dispositivo,
    });
    console.log(this.contactData.dispositivos);
  }

  dispositivo: IDispositivo = {
    number: '',
    description: '',
    type: 0,
  };
  contactData: IContact = {
    name: '',
    userId: 1,
    id: 0,
    dispositivos: [{ ...this.dispositivo }],
  };

  dispositiveData: DispositiveJsonPlaceholder = {
    TelephoneNumber: '',
    DescriptionType: '',
    Type: 0,
  };

  constructor(
    private cs: ContactosService,
    private router: Router,
    private ar: ActivatedRoute
  ) {} //private Cc: ContactCardComponent

  ngOnInit(): void {
    this.ar.params.subscribe((params) => {
      const sub: any = params['id'] || null;
    });
  }

  async onSubmit(form: NgForm) {
    console.log(this.contactData);
    const contactocreado = await this.cs.addContact(this.contactData); //ejectua addContact del contact service con los valores del form
    // this.router.navigate(['/lista-contactos']); //cuando iniciamos secion nos lleva a contactos if(await contactocreado)
  }
}
