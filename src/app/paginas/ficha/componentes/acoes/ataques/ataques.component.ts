import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ataques',
  standalone: true,
  imports: [],
  templateUrl: './ataques.component.html',
  styleUrl: './ataques.component.scss'
})
export class AtaquesComponent {

  @Input() public ataque:any;
}
