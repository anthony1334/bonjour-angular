import { Collegue } from './../models/collegue';
import { collegues } from './../mock/collegues.mock';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {take} from 'rxjs/operators';


@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {
  collegues: string[] = [];
  nom: string = '';
  state: boolean = false;


  constructor(private dataService: DataService) { }

  afficher(): void {

    this.collegues = this.dataService.rechercheParNom(this.nom);
    this.state = true;
    this.dataService.findByName(this.nom)
    .pipe(
      take(1)
    )
    .subscribe((response)=>console.log(response));


  }



  ngOnInit(): void {

  }

}
