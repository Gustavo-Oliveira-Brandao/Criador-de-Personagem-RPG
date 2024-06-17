import { Component } from '@angular/core';
import { StatsPersonagemService } from '../../shared/servicos/stats-personagem.service';
import { NgForOf } from '@angular/common';
import { PericiaComponent } from '../pericia/pericia.component';

@Component({
  selector: 'app-resistencias',
  standalone: true,
  imports: [NgForOf, PericiaComponent],
  templateUrl: './resistencias.component.html',
  styleUrl: './resistencias.component.scss'
})
export class ResistenciasComponent {

  constructor(protected StatsPersonagemService : StatsPersonagemService){}
}
