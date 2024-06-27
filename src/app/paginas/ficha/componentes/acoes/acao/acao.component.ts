import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-acao',
  standalone: true,
  imports: [],
  templateUrl: './acao.component.html',
  styleUrl: './acao.component.scss'
})
export class AcaoComponent {

  acaoEstaAberto: boolean = false;

  expandirAcao(){
    this.acaoEstaAberto = !this.acaoEstaAberto
  }

  @Input() public acao:any;
  @Input() public index:number;
}
