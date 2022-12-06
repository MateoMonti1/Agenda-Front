import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact, contacts } from 'src/app/core/interfaces/contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  constructor(private ar:ActivatedRoute) { }

  contact: Contact = contacts[0];

  ngOnInit(): void {
    this.ar.params.subscribe(data =>{
      console.log(data)
      //this.contactsService.getContact(data.id);
    })
  }
}
