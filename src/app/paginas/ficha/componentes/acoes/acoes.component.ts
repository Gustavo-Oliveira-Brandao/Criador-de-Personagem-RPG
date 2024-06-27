import { Component } from '@angular/core';
import { PersonagemService } from '../../../../shared/servicos/personagem.service';
import { AcaoComponent } from './acao/acao.component';
import { BotaoPequenoComponent } from '../../../../shared/componentes/botao-pequeno/botao-pequeno.component';
import { BotaoAdicionarComponent } from '../../../../shared/componentes/botao-adicionar/botao-adicionar.component';
import { ControleAccordionService } from '../../../../shared/servicos/controle-accordion.service';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-acoes',
  standalone: true,
  imports: [AcaoComponent, BotaoPequenoComponent, BotaoAdicionarComponent, NgForOf, FormsModule],
  templateUrl: './acoes.component.html',
  styleUrl: './acoes.component.scss'
})
export class AcoesComponent {

  constructor(protected personagem : PersonagemService, protected controleAccordion : ControleAccordionService){}
  tiposAcoes: any = ["Habilidade de raça", "Habilidade de classe", "Ataque", "Magia", "Talento"]
  default = "Habilidade de raça"

  custoDefault = "Ação padrão"
  custoAcoes: any = ["Ação padrão", "Ação de movimento",  "Ação completa", "Ação livre", "Passivo"]
  
  adicionarAcao(){
    let acao:any = [
      {
        nome: '',
        tipo: '',
        custo: '',
        descricao: ''
      }
    ]

    this.personagem.acoes.push(acao)
  }
}
