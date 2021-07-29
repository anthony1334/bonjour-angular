import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BonjourComponent } from './components/bonjour/bonjour.component';
import { BonjourAvecPrenomComponent } from './components/bonjour-avec-prenom/bonjour-avec-prenom.component';
import { CollegueComponent } from './components/collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';

@NgModule({
  declarations: [
    AppComponent,
    BonjourComponent,
    BonjourAvecPrenomComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
