import { Component, ElementRef, ViewChild } from '@angular/core';
import { StatsPersonagemService } from '../../shared/servicos/stats-personagem.service';
import { FotoPersonagemComponent } from '../foto-personagem/foto-personagem.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [FotoPersonagemComponent, FormsModule],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent {

  @ViewChild('vida') vida : ElementRef<HTMLCanvasElement>

  constructor(protected StatsPersonagemService : StatsPersonagemService){}

  alterarVida(){
    console.log(this.StatsPersonagemService.status.porcentagemVidaAtual)
    const calculo = 'calc((2 * pi * 89) - ((2 * pi * 89) * ' + this.StatsPersonagemService.status[0].porcentagemVidaAtual + ') / 100)'
    this.vida.nativeElement.style.setProperty('--barra-de-vida', calculo)
  }

}
