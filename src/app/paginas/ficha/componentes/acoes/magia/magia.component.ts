import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-magia',
  standalone: true,
  imports: [],
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
