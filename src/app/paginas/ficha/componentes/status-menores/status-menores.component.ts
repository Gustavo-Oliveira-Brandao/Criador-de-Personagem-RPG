import { Component, Input } from '@angular/core';
import { PersonagemService } from '../../../../shared/servicos/personagem.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-status-menores',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './status-menores.component.html',
  styleUrl: './status-menores.component.scss'
})
export class StatusMenoresComponent {

  @Input() public icon:string;
  @Input() public tipo:string;

  constructor(protected personagem : PersonagemService){}
}
