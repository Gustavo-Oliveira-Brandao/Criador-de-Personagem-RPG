import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { PericiaComponent } from '../pericia/pericia.component';
import { PersonagemService } from '../../../../shared/servicos/personagem.service';

@Component({
  selector: 'app-card-resistencias',
  standalone: true,
  imports: [NgForOf, PericiaComponent],
  templateUrl: './card-resistencias.component.html',
  styleUrl: './card-resistencias.component.scss'
})
export class CardResistenciasComponent {

  constructor(protected personagem : PersonagemService){}
}
