import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact, ContactJsonPlaceholder } from 'src/app/core/interfaces/contacts';
import { IDispositivo } from 'src/app/core/interfaces/dispositivos';
import { ContactosService } from 'src/app/core/services/contactos.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private route:ActivatedRoute, private cs:ContactosService) { }

  ngOnInit(): void {
    
    this.route.params
      .subscribe(params => {
        console.log(params['id'])
        this.getData(params['id']); 
      }
    );
  }

  contact: ContactJsonPlaceholder = {
    name: '',
    userID: 0,
    id: 0,
    dispositivos: []
  }

  dispositivo : IDispositivo = 
  {
    number : "",
    description : "",
    type: 0
  }
  
  async getData(id: number)
  {
    this.contact = await this.cs.getContactDetails(id);
  }

  async deleteContacto(id : number): Promise<void>{ 
    await this.cs.deleteContact(id);
  }
}
