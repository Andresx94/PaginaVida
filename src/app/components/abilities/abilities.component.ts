import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css']
})
export class AbilitiesComponent implements OnInit {

  abilidades: string[] = [
   "C",   
   "C++",
   "Java",
   "Phyton",
   
  ];
  constructor() { }

  ngOnInit() {
  }

}
