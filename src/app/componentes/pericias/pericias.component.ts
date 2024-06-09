import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import { FormsModule } from '@angular/forms';
import {StatsPersonagemService} from "../../shared/servicos/stats-personagem.service";

@Component({
  selector: 'app-pericias',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './pericias.component.html',
  styleUrl: './pericias.component.scss'
})
export class PericiasComponent {

  constructor(protected StatsPersonagemService : StatsPersonagemService){}
}
