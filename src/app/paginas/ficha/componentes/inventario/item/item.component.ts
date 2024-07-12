import { Component, Input } from '@angular/core';
import { BotaoPequenoComponent } from "../../../../../shared/componentes/botao-pequeno/botao-pequeno.component";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [BotaoPequenoComponent],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
  @Input() public item:any;
  @Input() public index:any;
}
