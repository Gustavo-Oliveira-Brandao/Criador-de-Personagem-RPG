import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import { FormsModule } from '@angular/forms';
import {StatsPersonagemService} from "../../shared/servicos/stats-personagem.service";
import { PericiaComponent } from '../pericia/pericia.component';

@Component({
  selector: 'app-pericias',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    PericiaComponent
  ],
  templateUrl: './pericias.component.html',
  styleUrl: './pericias.component.scss'
})
export class PericiasComponent {

  constructor(protected StatsPersonagemService : StatsPersonagemService){}
}
