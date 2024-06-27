import { Component, Input } from '@angular/core';
import { ControleFichaService } from '../../servicos/controle-ficha.service';

@Component({
  selector: 'app-botao-adicionar',
  standalone: true,
  imports: [],
  templateUrl: './botao-adicionar.component.html',
  styleUrl: './botao-adicionar.component.scss'
})
export class BotaoAdicionarComponent {

  constructor(protected controleFicha : ControleFichaService){}

  @Input() public nomeComponente : string;
}
