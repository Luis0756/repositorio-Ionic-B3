import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storage:Storage) {
    this.storage.create();

  }

  ngOnInit(){
    this.atualizaLista();
    this.somarPrecos()
  }

  variavel_lista = [];
  texto: string = "";
  preco: number = 0;
  aux = 0;
  precoTotal: number = 0

  async adiciona() {
    if (!(this.texto == "" || this.preco == 0 || this.preco == null)) {

        //this.variavel_lista.push("0", this.texto);
     
      

      this.variavel_lista.forEach(item => {
        if(parseInt(item[0]) > this.aux) {
          this.aux = parseInt((item[0]));
        }
      })
      
      this.aux = this.aux + 1;
      await this.storage.set(this.aux.toString(), [this.texto, this.preco]);
      
      this.atualizaLista();


      
      this.texto = "";
      this.preco = 0;
    }

      /*
    if (this.texto == "") {

    } else{
      this.variavel_lista.push(this.texto);
      this.texto = "";
    }*/

  }

   atualizaLista() {
    
    this.variavel_lista = [];
    this.storage.forEach((value, key, index) => {
      this.variavel_lista.push([key, value]);
      
    })
    this.somarPrecos()
  }

  somarPrecos(){
    this.precoTotal = 0
    this.storage.forEach((value, key, index) => {
      this.precoTotal += parseFloat(value[1])
      console.log("preco:", this.precoTotal)
    })
  }

  async remove(indice) {
    //this.variavel_lista.splice(indice, 1)
    await this.storage.remove(indice);
    this.atualizaLista();
  }

  //*ngFor = "let elemento_da_lista of minhaLista" no item
  //[(ngModel)]="texto" no input

}