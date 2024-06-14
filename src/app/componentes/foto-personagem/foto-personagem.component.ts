import { Component } from '@angular/core';
import { StatsPersonagemService } from '../../shared/servicos/stats-personagem.service';
@Component({
  selector: 'app-foto-personagem',
  standalone: true,
  imports: [],
  templateUrl: './foto-personagem.component.html',
  styleUrl: './foto-personagem.component.scss'
})
export class FotoPersonagemComponent {

  
  constructor(protected StatsPersonagemService : StatsPersonagemService){}
  
}
