import { Component, Input } from '@angular/core';
import { ControleAccordionService } from '../../servicos/controle-accordion.service';
import { ControleFichaService } from '../../servicos/controle-ficha.service';

@Component({
  selector: 'app-botao-pequeno',
  standalone: true,
  imports: [],
  templateUrl: './botao-pequeno.component.html',
  styleUrl: './botao-pequeno.component.scss'
})
export class BotaoPequenoComponent {

  constructor(protected controleAccordion: ControleAccordionService, protected controleFicha: ControleFichaService) { }

  @Input() public nomeComponente: string;
  @Input() public acao: string;
  @Input() public index: number;

  abrirMenu(nomeComponente: string) {
    if(nomeComponente == 'proficiencia'){
      this.controleAccordion.adicionarProficienciaEstaAberto = !this.controleAccordion.adicionarProficienciaEstaAberto
    }
    if(nomeComponente == 'ataques'){
      this.controleAccordion.adicionarAtaqueEstaAberto = !this.controleAccordion.adicionarAtaqueEstaAberto
    }
    if(nomeComponente == 'item'){
      this.controleAccordion.adicionarItemEstaAberto = !this.controleAccordion.adicionarItemEstaAberto
    }
  }
  
}
