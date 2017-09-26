import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  informacion:String[]=[
    "Telefeno Celular: 79363685",
    "Telefono fijo: 45877412",
    "Correo: andres@gmail.com",
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
