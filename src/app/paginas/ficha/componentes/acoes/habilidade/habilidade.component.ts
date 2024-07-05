import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-habilidade',
  standalone: true,
  imports: [],
  templateUrl: './habilidade.component.html',
  styleUrl: './habilidade.component.scss'
})
export class HabilidadeComponent {

  habilidadeEstaExpandida: boolean = false;

  @Input() public habilidade:any;

  expandir(){
    this.habilidadeEstaExpandida = !this.habilidadeEstaExpandida
  }
}
