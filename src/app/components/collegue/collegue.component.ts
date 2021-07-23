import { Collegue } from './../../models/collegue';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  @Input() col: Collegue = new Collegue();

  constructor() { }

  ngOnInit(): void {
  }
  modifier(): void{
    console.log("collegue modifié !")
  }

  creer(): void{
    console.log("Création d’un nouveau collègue.");
  }

}
