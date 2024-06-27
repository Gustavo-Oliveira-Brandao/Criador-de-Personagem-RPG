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

  salvarPersonagem(){
    localStorage.setItem('info', JSON.stringify(this.personagem.info))
    localStorage.setItem('atributos', JSON.stringify(this.personagem.atributos))
    localStorage.setItem('pericias', JSON.stringify(this.personagem.pericias))
    localStorage.setItem('resistencias', JSON.stringify(this.personagem.resistencias))
    localStorage.setItem('proficiencias',  JSON.stringify(this.personagem.proficiencias))
    localStorage.setItem('acoes', JSON.stringify(this.personagem.acoes))
  }

  carregarPersonagem() {
    const info = localStorage.getItem('info')
    const atributos = localStorage.getItem('atributos')
    const resistencias = localStorage.getItem('resistencias')
    const pericias = localStorage.getItem('pericias')
    const proficiencias = localStorage.getItem('proficiencias')
    const acoes = localStorage.getItem('acoes')
    if (info == undefined || atributos == undefined || resistencias == undefined || pericias == undefined) {
      console.log("Personagem não existe")
    } else {
      this.personagem.info = JSON.parse(info);
      this.personagem.atributos = JSON.parse(atributos)
      this.personagem.resistencias = JSON.parse(resistencias)
      this.personagem.pericias = JSON.parse(pericias)
    }
    if(proficiencias == undefined){
      console.log("Sem proficiencias")
    } else{
      this.personagem.proficiencias = JSON.parse(proficiencias)
    }
    if(acoes == undefined){
      console.log("Sem ações")
    } else{
      this.personagem.acoes = JSON.parse(acoes)
    }
  }
}

