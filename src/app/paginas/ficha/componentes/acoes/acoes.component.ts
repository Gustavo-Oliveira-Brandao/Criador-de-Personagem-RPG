import { Component } from '@angular/core';
import { BotaoPequenoComponent } from '../../../../shared/componentes/botao-pequeno/botao-pequeno.component';
import { AtaquesComponent } from './ataques/ataques.component';
import { PersonagemService } from '../../../../shared/servicos/personagem.service';
import { ControleAccordionService } from '../../../../shared/servicos/controle-accordion.service';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BotaoAdicionarComponent } from '../../../../shared/componentes/botao-adicionar/botao-adicionar.component';
import { HabilidadeComponent } from './habilidade/habilidade.component';
import { MagiaComponent } from './magia/magia.component';
import { StatusComponent } from '../status/status.component';
import { AdicionarAtaqueMagiaComponent } from './adicionar-ataque-magia/adicionar-ataque-magia.component';

@Component({
  selector: 'app-acoes',
  standalone: true,
  imports: [BotaoPequenoComponent, AtaquesComponent, NgForOf, FormsModule, BotaoAdicionarComponent, HabilidadeComponent, MagiaComponent, StatusComponent, AdicionarAtaqueMagiaComponent],
  templateUrl: './acoes.component.html',
  styleUrl: './acoes.component.scss'
})
export class AcoesComponent {

  constructor(protected personagem: PersonagemService, protected accordion: ControleAccordionService) { }

  abaIndex: number = 0;
  temp: number = 0;

  alterarAba(index: number) {

    this.abaIndex += index;
      if (this.abaIndex > 2) {
        this.abaIndex = 0;
      }
      if (this.abaIndex < 0) {
        this.abaIndex = 2;
      }
  }

  atributos = ["Força", "Destreza", "Constituição", "Inteligência", "Sabedoria", "Carisma"]

  resistencias = ["Fortitude", "Reflexos", "Vontade"]

  custos = ["Ação padrão", "Ação de movimento", "Ação completa", "Ação livre", "Passivo"]

  niveis = [1, 2, 3, 4, 5]
  
  origens = ["Habilidade de raça", "Habilidade de classe", "Talento"]
}
