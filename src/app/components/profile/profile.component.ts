import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  perfil:String[]=[
    "Nombre: Andres Bustamante Del Castillo",
    "Edad: 20 años ",
    
    

  ];
  constructor() { }

  ngOnInit() {
  }

}
