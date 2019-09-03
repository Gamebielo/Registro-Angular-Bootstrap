import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';
import { Veiculo } from '../veiculo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private marcas: string[] = ['Fiat', 'Ford', 'GM', 'Volkswagen'];
  private veiculo: Veiculo = new Veiculo;

  constructor(private servico: ServicoService) { }

  ngOnInit() {
    this.reset();
  }

  salvar(): void{
    this.servico.add(this.veiculo);
    this.veiculo = new Veiculo();
  }

  reset(): void{
    this.veiculo = {
      marca: undefined,
      modelo: undefined,
      valor: undefined
    };
  }

}