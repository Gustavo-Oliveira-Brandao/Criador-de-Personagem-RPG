import { Component } from '@angular/core';
import { PersonagemService } from '../../../../../shared/servicos/personagem.service';

@Component({
  selector: 'app-barra-mana',
  standalone: true,
  imports: [],
  templateUrl: './barra-mana.component.html',
  styleUrl: './barra-mana.component.scss'
})
export class BarraManaComponent {

  constructor(protected StatsPersonagemService : PersonagemService){}
}
