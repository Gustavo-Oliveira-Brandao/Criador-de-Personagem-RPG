import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proficiencia',
  standalone: true,
  imports: [],
  templateUrl: './proficiencia.component.html',
  styleUrl: './proficiencia.component.scss'
})
export class ProficienciaComponent {

  @Input() public proficiencia:any;
}
