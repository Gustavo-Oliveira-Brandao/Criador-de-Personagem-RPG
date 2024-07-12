import { Component, Input } from '@angular/core';
import { BotaoPequenoComponent } from "../../../../../shared/componentes/botao-pequeno/botao-pequeno.component";

@Component({
  selector: 'app-magia',
  standalone: true,
  imports: [BotaoPequenoComponent],
  templateUrl: './magia.component.html',
  styleUrl: './magia.component.scss'
})
export class MagiaComponent {

  magiaEstaExpandida: boolean = false;

  expandir() {
    this.magiaEstaExpandida = !this.magiaEstaExpandida
  }

  @Input() public magia: any
}
