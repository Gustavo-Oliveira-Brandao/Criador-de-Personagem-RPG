import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonagemService } from '../../../../shared/servicos/personagem.service';
@Component({
  selector: 'app-pericia',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './pericia.component.html',
  styleUrl: './pericia.component.scss'
})
export class PericiaComponent {

  constructor(protected personagem : PersonagemService){}

  @Input() public pericia:any;
  @Input() public resistencia:any;
  @Input() public ehPericia:boolean;
}
