import { Component } from '@angular/core';
import { ProficienciaComponent } from './proficiencia/proficiencia.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ControleAccordionService } from '../../../../shared/servicos/controle-accordion.service';
import { BotaoPequenoComponent } from '../../../../shared/componentes/botao-pequeno/botao-pequeno.component';
import { BotaoAdicionarComponent } from '../../../../shared/componentes/botao-adicionar/botao-adicionar.component';
import { PersonagemService } from '../../../../shared/servicos/personagem.service';

@Component({
  selector: 'app-proficiencias',
  standalone: true,
  imports: [ProficienciaComponent, NgFor, FormsModule, BotaoPequenoComponent, BotaoAdicionarComponent ],
  templateUrl: './proficiencias.component.html',
  styleUrl: './proficiencias.component.scss'
})
export class ProficienciasComponent {

  constructor(protected proficiencias : PersonagemService, protected accordion : ControleAccordionService){}

  default = "Armaduras";

  tiposProficiencia:any = ["Armaduras", "Armas", "Idiomas", "Instrumentos", "Ferramentas", "Outros"];

}
