import { Collegue } from './../models/collegue';
import { collegues } from './../mock/collegues.mock';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {
  collegues: string[] = [];
  nom: string = '';


  constructor(private dataService: DataService) { }

  afficher(): void {

    this.collegues = this.dataService.rechercheParNom(this.nom);

  }



  ngOnInit(): void {

  }

}
