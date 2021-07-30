import { Collegue } from './../models/collegue';
import { collegues, collegue } from './../mock/collegues.mock';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  collegues: Collegue[] = collegues;

  constructor(private httpClient: HttpClient) {}
  rechercheParNom(nom: string): string[] {

    return this.collegues
    .filter((obj: Collegue)=>obj.nom===nom)
    .map((collegue: Collegue)=>collegue.matricule)
  }

  recupereCollegueCourant(){
    return collegue;

  }

  findByName(name: string): Observable<any>{
    return this.httpClient.get<any>('http://localhost:8080/collegue/'+ name);


  }


}
