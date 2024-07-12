import { Component } from '@angular/core';
import { ItemComponent } from './item/item.component';
import { PersonagemService } from '../../../../shared/servicos/personagem.service';
import { BotaoPequenoComponent } from '../../../../shared/componentes/botao-pequeno/botao-pequeno.component';
import { BotaoAdicionarComponent } from '../../../../shared/componentes/botao-adicionar/botao-adicionar.component';
import { ControleAccordionService } from '../../../../shared/servicos/controle-accordion.service';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [ItemComponent, BotaoPequenoComponent, BotaoAdicionarComponent],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.scss'
})
export class InventarioComponent {

  constructor(protected personagem : PersonagemService, protected accordion : ControleAccordionService){}
}
