import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonagemService } from '../../../../../shared/servicos/personagem.service';

@Component({
  selector: 'app-barra-vida',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './barra-vida.component.html',
  styleUrl: './barra-vida.component.scss'
})
export class BarraVidaComponent {

  constructor(protected StatsPersonagemService : PersonagemService){}
}
