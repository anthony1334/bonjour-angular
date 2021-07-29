import { Collegue } from './../models/collegue';
import { collegues } from './../mock/collegues.mock';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {
  collegues: Collegue[] = [];

  constructor() { }

  afficher(): void {
    this.collegues = collegues;

  }

  ngOnInit(): void {
  }

}
