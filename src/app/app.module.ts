import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from'@angular/common/http';

import { AppComponent } from './app.component';
import { BonjourComponent } from './components/bonjour/bonjour.component';
import { BonjourAvecPrenomComponent } from './components/bonjour-avec-prenom/bonjour-avec-prenom.component';
import { CollegueComponent } from './components/collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BonjourComponent,
    BonjourAvecPrenomComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
