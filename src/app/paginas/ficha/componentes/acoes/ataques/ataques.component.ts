import { Component, Input } from '@angular/core';
import { BotaoPequenoComponent } from "../../../../../shared/componentes/botao-pequeno/botao-pequeno.component";

@Component({
  selector: 'app-ataques',
  standalone: true,
  imports: [BotaoPequenoComponent],
  templateUrl: './ataques.component.html',
  styleUrl: './ataques.component.scss'
})
export class AtaquesComponent {

  @Input() public ataque:any;
  @Input() public index:any;
}
