import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IContact } from 'src/app/core/interfaces/contact2';
import { IDispositivo } from 'src/app/core/interfaces/dispositivos';
import { ContactosService } from 'src/app/core/services/contactos.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  typeDispositivo = ['CelularNumber', 'PhoneNumber', 'Fax'];

  constructor(
    private route: ActivatedRoute,
    private cs: ContactosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      this.getData(params['id']);
    });
  }

  dispositivo: IDispositivo = {
    number: '',
    description: '',
    type: 0,
  };

  contact: IContact = {
    name: '',
    userId: 0,
    id: 0,
    dispositivos: [{ ...this.dispositivo }, { ...this.dispositivo }],
  };

  async getData(id: number) {
    this.contact = await this.cs.getContactDetails(id);
  }

  async deleteContacto(id: number): Promise<void> {
    await this.cs.deleteContact(id);
  }

  async edit() {
    // console.log(this.contact);
    let edit = await this.cs.editContact(this.contact);
    alert('se guardo el contacto');
    this.router.navigate(['/lista-contactos']);
  }
}
