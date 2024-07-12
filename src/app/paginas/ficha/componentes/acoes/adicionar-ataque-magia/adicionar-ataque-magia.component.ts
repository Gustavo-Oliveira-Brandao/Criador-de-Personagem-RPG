import { NgFor, NgForOf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BotaoAdicionarComponent } from '../../../../../shared/componentes/botao-adicionar/botao-adicionar.component';

@Component({
  selector: 'app-adicionar-ataque-magia',
  standalone: true,
  imports: [NgForOf, NgFor, FormsModule, BotaoAdicionarComponent],
  templateUrl: './adicionar-ataque-magia.component.html',
  styleUrl: './adicionar-ataque-magia.component.scss'
})
export class AdicionarAtaqueMagiaComponent {

  @Input() public ehMagia : boolean
  
  atributos = ["Sem atributo", "Força", "Destreza", "Constituição", "Inteligência", "Sabedoria", "Carisma"]

  resistencias = ["Fortitude", "Reflexos", "Vontade"]

  custos = ["Ação padrão", "Ação de movimento", "Ação completa", "Ação livre", "Passivo"]

  niveis = [1, 2, 3, 4, 5]

}
