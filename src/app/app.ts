import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Profil } from "./components/profil/profil";
//import { Competences } from "./components/competences/competences";
import { Parcours } from "./components/parcours/parcours";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Profil, /*Competences,*/ Parcours],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Portfolio_angular');
}
