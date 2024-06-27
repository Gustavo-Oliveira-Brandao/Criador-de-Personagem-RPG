import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import { FormsModule } from '@angular/forms';
import { PericiaComponent } from '../pericia/pericia.component';
import { PersonagemService } from '../../../../shared/servicos/personagem.service';

@Component({
  selector: 'app-card-pericias',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    PericiaComponent
  ],
  templateUrl: './card-pericias.component.html',
  styleUrl: './card-pericias.component.scss'
})
export class CardPericiasComponent {

  constructor(protected personagem : PersonagemService){}
}
