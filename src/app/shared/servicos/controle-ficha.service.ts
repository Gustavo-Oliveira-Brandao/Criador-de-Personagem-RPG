import { Injectable } from '@angular/core';
import { ControleAccordionService } from './controle-accordion.service';
import { PersonagemService } from './personagem.service';

@Injectable({
  providedIn: 'root'
})
export class ControleFichaService {

  constructor(protected personagem: PersonagemService, protected controleAccordion: ControleAccordionService) { }

  adicionarItem(nomeComponente: string) {
    if (nomeComponente == 'proficiencia') {
      this.personagem.adicionarProficiencia();
      this.controleAccordion.adicionarProficienciaEstaAberto = !this.controleAccordion.adicionarProficienciaEstaAberto
    }
    if (nomeComponente == 'acao') {
      this.personagem.adicionarAcao();
      this.controleAccordion.adicionarAcaoEstaAberto = !this.controleAccordion.adicionarAcaoEstaAberto
    }
    if (nomeComponente == 'inventario') {
      this.personagem.adicionarItemInventario()
      this.controleAccordion.adicionarItemEstaAberto = !this.controleAccordion.adicionarItemEstaAberto
    }
  }

  deletarItem(nomeComponente: string, index: number) {
    if (nomeComponente == "proficiencia") {
      this.personagem.removerProficiencia(index)
    }
    if (nomeComponente == "acao") {
      this.personagem.removerAcao(index)
    }
    if (nomeComponente == "item") {
      this.personagem.removerItemInventario(index)
    }
  }
}
