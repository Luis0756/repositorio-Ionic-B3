import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  variavel_lista = [];

  //*ngFor = "let item of minhaLista" no item
  //[(ngModel)]="texto" no input

}
