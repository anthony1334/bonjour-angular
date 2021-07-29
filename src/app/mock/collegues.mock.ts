
import { Collegue } from './../models/collegue';

export const collegue: Collegue = {
  matricule:"1234",
  nom:"babar",
  prenoms:"yvan,gael",
  dateDeNaissance:new Date('1995-12-17T03:24:00'),
  email:"toto@.com",
  photoUrl:"./blabla"

}
export const collegues: Collegue[] = [
  {
    matricule:"1235",
    nom:"babar",
    prenoms:"yvan,gael",
    dateDeNaissance:new Date('1995-12-17T03:24:00'),
    email:"toto@.com",
    photoUrl:"./blabla"
  },
  {
    matricule:"5678",
    nom:"seraphin",
    prenoms:"toto,titi",
    dateDeNaissance:new Date('1995-12-17T03:24:00'),
    email:"seraphin@.com",
    photoUrl:"./blibla"
  },
  {
    matricule:"9124",
    nom:"caroline",
    prenoms:"coco,lila",
    dateDeNaissance:new Date('1995-12-17T03:24:00'),
    email:"caroline@.com",
    photoUrl:"./blobla"
  },
  {
    matricule:"4321",
    nom:"boule",
    prenoms:"bili,goal",
    dateDeNaissance:new Date('1995-12-17T03:24:00'),
    email:"boule@.com",
    photoUrl:"./blublu"
  }

];
