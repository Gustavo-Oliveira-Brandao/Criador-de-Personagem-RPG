import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControleAccordionService {

  constructor() { }

  adicionarProficienciaEstaAberto : boolean = false;
  adicionarAtaqueEstaAberto : boolean = false;
  adicionarMagiaEstaAberto : boolean = false;
  adicionarHabilidadeEstaAberto : boolean = false;
  adicionarInventarioEstaAberto : boolean = false;
  
}
