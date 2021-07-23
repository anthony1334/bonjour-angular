import { Collegue } from './models/collegue';
import { Component } from '@angular/core';
import { collegue } from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bonjour-angular';
  collegue: Collegue = collegue;
}
