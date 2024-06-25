import { Component } from '@angular/core';
import { StatsPersonagemService } from '../../shared/servicos/stats-personagem.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-vida',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './barra-vida.component.html',
  styleUrl: './barra-vida.component.scss'
})
export class BarraVidaComponent {

  constructor(protected StatsPersonagemService : StatsPersonagemService){}
}
