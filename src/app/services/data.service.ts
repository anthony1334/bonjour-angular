import { Collegue } from './../models/collegue';
import { collegues, collegue } from './../mock/collegues.mock';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  collegues: Collegue[] = collegues;

  constructor() {}
  rechercheParNom(nom: string): string[] {

    return this.collegues
    .filter((obj: Collegue)=>obj.nom===nom)
    .map((collegue: Collegue)=>collegue.matricule)
  }

  recupereCollegueCourant(){
    return collegue;

  }


}
