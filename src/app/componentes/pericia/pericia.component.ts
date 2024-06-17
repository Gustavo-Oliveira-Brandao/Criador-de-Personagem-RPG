import { Component, Input } from '@angular/core';
import { StatsPersonagemService } from '../../shared/servicos/stats-personagem.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-pericia',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './pericia.component.html',
  styleUrl: './pericia.component.scss'
})
export class PericiaComponent {

  constructor(protected StatsPersonagemService : StatsPersonagemService){}

  @Input() public pericia:any;
  @Input() public resistencia:any;
  @Input() public ehPericia:boolean;
}
