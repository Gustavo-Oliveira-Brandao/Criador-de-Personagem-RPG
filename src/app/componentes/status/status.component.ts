import { Component, ElementRef, ViewChild } from '@angular/core';
import { StatsPersonagemService } from '../../shared/servicos/stats-personagem.service';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent {

  @ViewChild('vida') vida : ElementRef<HTMLCanvasElement>

  constructor(protected StatsPersonagemService : StatsPersonagemService){}

  alterarVida(){
    console.log(this.StatsPersonagemService.status.porcentagemVidaAtual)
    const calculo = 'calc((2 * pi * 85) - ((2 * pi * 85) * ' + this.StatsPersonagemService.status[0].porcentagemVidaAtual + ') / 100)'
    this.vida.nativeElement.style.setProperty('--barra-de-vida', calculo)
  }
}
