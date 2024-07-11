import { Component, Input } from '@angular/core';
import { PersonagemService } from '../../../../shared/servicos/personagem.service';

@Component({
  selector: 'app-barra-status',
  standalone: true,
  imports: [],
  templateUrl: './barra-status.component.html',
  styleUrl: './barra-status.component.scss'
})
export class BarraStatusComponent {

  @Input() public tipo:any;
  
  constructor(protected personagem : PersonagemService){}
}
