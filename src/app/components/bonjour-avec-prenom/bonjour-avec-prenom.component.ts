import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-bonjour-avec-prenom',
  templateUrl: './bonjour-avec-prenom.component.html',
  styleUrls: ['./bonjour-avec-prenom.component.css']
})
export class BonjourAvecPrenomComponent implements OnInit {
 @Input() prenom: string = ''; // ajout d'une propriété
  constructor() {
   // valorisation de la propriété
  }
  ngOnInit() {

  }
}
