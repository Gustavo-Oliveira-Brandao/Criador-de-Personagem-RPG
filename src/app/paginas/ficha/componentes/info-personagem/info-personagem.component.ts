import { Component } from '@angular/core';
import { PersonagemService } from '../../../../shared/servicos/personagem.service';
import { ControleFichaService } from '../../../../shared/servicos/controle-ficha.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info-personagem',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './info-personagem.component.html',
  styleUrl: './info-personagem.component.scss'
})
export class InfoPersonagemComponent {

  constructor(protected personagem : PersonagemService, protected controleFicha : ControleFichaService){}
}
