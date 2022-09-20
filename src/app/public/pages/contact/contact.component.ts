import { Component, OnInit } from '@angular/core';
import { Contact, contacts } from 'src/app/core/interface/contacts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  contacts :Contact[] =contacts;
  constructor() { }

  ngOnInit(): void {
  }
}
