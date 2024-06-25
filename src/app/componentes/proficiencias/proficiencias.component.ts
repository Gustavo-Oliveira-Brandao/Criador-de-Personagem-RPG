import { Component } from '@angular/core';
import { ProficienciasService } from '../../shared/servicos/proficiencias.service';
import { ProficienciaComponent } from '../proficiencia/proficiencia.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-proficiencias',
  standalone: true,
  imports: [ProficienciaComponent, NgFor, FormsModule],
  templateUrl: './proficiencias.component.html',
  styleUrl: './proficiencias.component.scss'
})
export class ProficienciasComponent {

  constructor(protected ProficienciasService : ProficienciasService){}

  default = "Armaduras";

  menuEstaAberto = false;

  tiposProficiencia:any = ["Armaduras", "Armas", "Idiomas", "Instrumentos", "Ferramentas", "Outros"];

  abrirMenu(){
    this.menuEstaAberto = !this.menuEstaAberto;
  }
}
