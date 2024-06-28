import { Component } from '@angular/core';
import { BotaoPequenoComponent } from '../../../../shared/componentes/botao-pequeno/botao-pequeno.component';
import { AtaquesComponent } from './ataques/ataques.component';
import { PersonagemService } from '../../../../shared/servicos/personagem.service';
import { ControleAccordionService } from '../../../../shared/servicos/controle-accordion.service';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BotaoAdicionarComponent } from '../../../../shared/componentes/botao-adicionar/botao-adicionar.component';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [BotaoPequenoComponent, AtaquesComponent, NgForOf, FormsModule, BotaoAdicionarComponent],
  templateUrl: './habilidades.component.html',
  styleUrl: './habilidades.component.scss'
})
export class HabilidadesComponent {

  constructor(protected personagem : PersonagemService, protected accordion : ControleAccordionService){}

  abaAtaqueEstaSelecionada : boolean = true;
  abaHabilidadesEstaSelecionada : boolean = false;
  abaGrimorioEstaSelecionada : boolean = false;

  atributoDefault : any = "Força"
  atributos = ["Força", "Destreza", "Constituição", "Inteligência", "Sabedoria", "Carisma"]
}
