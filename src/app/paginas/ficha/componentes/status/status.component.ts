import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonagemService } from '../../../../shared/servicos/personagem.service';
import { ControleFichaService } from '../../../../shared/servicos/controle-ficha.service';
import { BarraStatusComponent } from '../barra-status/barra-status.component';
import { StatusMenoresComponent } from '../status-menores/status-menores.component';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [FormsModule, BarraStatusComponent, StatusMenoresComponent],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent {

  constructor(protected personagem: PersonagemService, protected controleFicha: ControleFichaService) { }

  editarVidaEstaAberto: boolean = false;
  editarManaEstaAberto: boolean = false;

  abrirEdicaoVida() {
    this.editarVidaEstaAberto = !this.editarVidaEstaAberto
  }
  abrirEdicaoMana() {
    this.editarManaEstaAberto = !this.editarManaEstaAberto
  }

  alterarVida(ehDano: boolean) {
    let valor = Number((<HTMLInputElement>document.getElementById('valor-vida')).value)

    if (valor != null) {
      if (ehDano) {
        this.personagem.info.vidaAtual -= valor
      }
      if (!ehDano) {
        this.personagem.info.vidaAtual += valor

        if(this.personagem.info.vidaAtual > this.personagem.info.vidaMaxima){
          this.personagem.info.vidaAtual = this.personagem.info.vidaMaxima
        }
      }
    }
    this.editarVidaEstaAberto = !this.editarVidaEstaAberto
  }

  alterarMana(ehGasto: boolean){
    let valor = Number((<HTMLInputElement>document.getElementById('valor-mana')).value)

    if (valor != null) {
      if(ehGasto){
        this.personagem.info.manaAtual -= valor
      }
      if(!ehGasto){
        this.personagem.info.manaAtual += valor
        
        if(this.personagem.info.manaAtual > this.personagem.info.manaMaxima){
          this.personagem.info.manaAtual = this.personagem.info.manaMaxima
        }
      }
      this.editarManaEstaAberto = !this.editarManaEstaAberto;
    }
  }
}
