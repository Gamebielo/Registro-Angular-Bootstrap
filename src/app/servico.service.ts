import { Injectable } from '@angular/core';
import { Veiculo } from './veiculo';

@Injectable()
export class ServicoService {
  public lista: Veiculo[] = [];

  constructor() { }

  add(veiculo:Veiculo):void{
    this.lista.push(veiculo);
  }

  remove(veiculo: Veiculo):void {
    let indice = this.lista.indexOf(veiculo, 0);
    if (indice > -1) {
      this.lista.splice(indice, 1);
    }
  }

}