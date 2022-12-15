import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/core/interfaces/contacts';
import { ContactosService } from 'src/app/core/services/contactos.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  constructor(private ar:ActivatedRoute, private _contactosServices:ContactosService) { }

 

  ngOnInit(): void {
    
    
  }

  
}
