import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControleAccordionService {

  constructor() { }

  adicionarProficienciaEstaAberto : boolean = false;
  adicionarAcaoEstaAberto : boolean = false;
  adicionarItemEstaAberto : boolean = false;

}
