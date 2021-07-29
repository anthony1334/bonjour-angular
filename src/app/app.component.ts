import { DataService } from './services/data.service';
import { Collegue } from './models/collegue';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'bonjour-angular';
  collegue: Collegue = new Collegue;

  constructor(private dataService: DataService){}

  ngOnInit(){
    this.collegue = this.dataService.recupereCollegueCourant();
  }
}


