import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BarraVidaComponent } from './barra-vida/barra-vida.component';
import { BarraManaComponent } from './barra-mana/barra-mana.component';
import { PersonagemService } from '../../../../shared/servicos/personagem.service';
import { ControleFichaService } from '../../../../shared/servicos/controle-ficha.service';
import { Personagem } from '../../../../personagem';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [FormsModule, BarraVidaComponent, BarraManaComponent],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent {

  @ViewChild('vida') vida: ElementRef<HTMLCanvasElement>

  constructor(protected personagem : PersonagemService, protected controleFicha : ControleFichaService) { }

  accordionVidaEstaAberto: boolean = false;
  accordionManaEstaAberto: boolean = false;

  subirNivel(){
    this.personagem.info.nivel += 1;
  }

  alterarVida(ehDano: boolean) {
    let elemento = (<HTMLInputElement>document.getElementById('valor-vida')).value
    let valor: number = Number(elemento)

    if (ehDano) {
      this.personagem.info.vidaAtual -= valor;
    }

    if (!ehDano) {
      this.personagem.info.vidaAtual += valor;

      if (this.personagem.info.vidaAtual > this.personagem .info.vidaMaxima) {
        this.personagem.info.vidaAtual = this.personagem .info.vidaMaxima
      }
    }

    this.accordionVidaEstaAberto = !this.accordionVidaEstaAberto;
  }

  alterarMana(gastouMana : boolean){
    let elemento = (<HTMLInputElement>document.getElementById('valor-mana')).value
    let valor: number = Number(elemento)

    if(gastouMana){
      this.personagem.info.manaAtual -= valor;
    }

    if(!gastouMana){
      this.personagem.info.manaAtual += valor;

      if(this.personagem.info.manaAtual > this.personagem.info.manaMaxima) {
        this.personagem.info.manaAtual = this.personagem.info.vidaMaxima
      }
    }
  }

  abrirVidaAccordion() {
    this.accordionVidaEstaAberto = !this.accordionVidaEstaAberto
  }

  abrirManaAccordion() {
    this.accordionManaEstaAberto = !this.accordionManaEstaAberto
  }

}
