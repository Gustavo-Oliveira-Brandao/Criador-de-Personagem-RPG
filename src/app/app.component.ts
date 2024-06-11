import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AtributosComponent } from './componentes/atributos/atributos.component';
import { SidebarComponent } from './componentes/sidebar/sidebar.component';
import { PericiasComponent } from "./componentes/pericias/pericias.component";
import { StatusComponent } from './componentes/status/status.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, AtributosComponent, PericiasComponent, StatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-rpg';
}
