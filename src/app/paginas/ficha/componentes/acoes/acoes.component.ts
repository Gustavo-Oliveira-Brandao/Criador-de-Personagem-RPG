import { Component } from '@angular/core';

@Component({
  selector: 'app-acoes',
  standalone: true,
  imports: [],
  templateUrl: './acoes.component.html',
  styleUrl: './acoes.component.scss'
})
export class AcoesComponent {

  acoes:any = [
  ]

  adicionarAcao(){
    let acao:any = [
      {
        nome: '',
        tipo: '',
        custo: '',
      }
    ]

    this.acoes.push(acao)
  }
}
