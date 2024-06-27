import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AtributosComponent } from './paginas/ficha/componentes/atributos/atributos.component';
import { SidebarComponent } from './shared/componentes/sidebar/sidebar.component';
import { CardPericiasComponent } from "./paginas/ficha/componentes/card-pericias/card-pericias.component";
import { StatusComponent } from './paginas/ficha/componentes/status/status.component';
import { CardResistenciasComponent } from './paginas/ficha/componentes/card-resistencias/card-resistencias.component';
import { ProficienciasComponent } from './paginas/ficha/componentes/proficiencias/proficiencias.component';
import { AcoesComponent } from './paginas/ficha/componentes/acoes/acoes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, AtributosComponent, CardPericiasComponent, StatusComponent, CardResistenciasComponent, ProficienciasComponent, AcoesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-rpg';
}
