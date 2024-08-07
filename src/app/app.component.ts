import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AtributosComponent } from './paginas/ficha/componentes/atributos/atributos.component';
import { SidebarComponent } from './shared/componentes/sidebar/sidebar.component';
import { CardPericiasComponent } from "./paginas/ficha/componentes/card-pericias/card-pericias.component";
import { StatusComponent } from './paginas/ficha/componentes/status/status.component';
import { CardResistenciasComponent } from './paginas/ficha/componentes/card-resistencias/card-resistencias.component';
import { ProficienciasComponent } from './paginas/ficha/componentes/proficiencias/proficiencias.component';
import { ControleFichaService } from './shared/servicos/controle-ficha.service';
import { AcoesComponent } from './paginas/ficha/componentes/acoes/acoes.component';
import { InfoPersonagemComponent } from './paginas/ficha/componentes/info-personagem/info-personagem.component';
import { InventarioComponent } from './paginas/ficha/componentes/inventario/inventario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    SidebarComponent,
    AtributosComponent,
    CardPericiasComponent,
    StatusComponent,
    CardResistenciasComponent,
    ProficienciasComponent,
    AcoesComponent,
    InfoPersonagemComponent,
    InventarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'projeto-rpg';

  constructor(protected controleFicha: ControleFichaService) { }

  ngOnInit(): void {
    this.controleFicha.carregarPersonagem();
  }

}
