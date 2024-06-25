import { Component, Input } from '@angular/core';
import { ProficienciasService } from '../../shared/servicos/proficiencias.service';

@Component({
  selector: 'app-proficiencia',
  standalone: true,
  imports: [],
  templateUrl: './proficiencia.component.html',
  styleUrl: './proficiencia.component.scss'
})
export class ProficienciaComponent {

  constructor(protected ProficienciasService : ProficienciasService){}

  @Input() public proficiencia:any;
}
