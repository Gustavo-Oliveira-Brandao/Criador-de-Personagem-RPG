import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonagemService } from '../../../../shared/servicos/personagem.service';

@Component({
  selector: 'app-atributos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './atributos.component.html',
  styleUrl: './atributos.component.scss'
})
export class AtributosComponent {

  constructor(protected personagem : PersonagemService){}

}
