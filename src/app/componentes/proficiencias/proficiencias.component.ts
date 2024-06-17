import { Component } from '@angular/core';
import { ProficienciasService } from '../../shared/servicos/proficiencias.service';

@Component({
  selector: 'app-proficiencias',
  standalone: true,
  imports: [],
  templateUrl: './proficiencias.component.html',
  styleUrl: './proficiencias.component.scss'
})
export class ProficienciasComponent {

  constructor(protected ProficienciasService : ProficienciasService){}
  
}
