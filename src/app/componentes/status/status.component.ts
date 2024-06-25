import { Component, ElementRef, ViewChild } from '@angular/core';
import { StatsPersonagemService } from '../../shared/servicos/stats-personagem.service';
import { FormsModule } from '@angular/forms';
import { BarraVidaComponent } from '../barra-vida/barra-vida.component';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [FormsModule, BarraVidaComponent],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent {

  @ViewChild('vida') vida: ElementRef<HTMLCanvasElement>

  constructor(protected StatsPersonagemService: StatsPersonagemService) { }

  accordionEstaAberto: boolean = false;

  alterarVida(ehDano: boolean) {
    let elemento = (<HTMLInputElement>document.getElementById('valor-vida')).value
    let valor: number = Number(elemento)

    if (ehDano) {
      this.StatsPersonagemService.status[0].vidaAtual -= valor;
    }
    
    if (!ehDano) {
      this.StatsPersonagemService.status[0].vidaAtual += valor;

      if (this.StatsPersonagemService.status[0].vidaAtual > this.StatsPersonagemService.status[0].vidaMaxima) {
        this.StatsPersonagemService.status[0].vidaAtual = this.StatsPersonagemService.status[0].vidaMaxima
      }
    }

    this.accordionEstaAberto = !this.accordionEstaAberto;
  }

  abrirAccordion() {
    let elemento = document.getElementById('alterar-vida')
    elemento?.classList.add('transition')
    this.accordionEstaAberto = !this.accordionEstaAberto
  }

}
