import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControleModalService {

  constructor() { }

  isModalOpen = false;

  abrirModal(){
    this.isModalOpen = true;
  }
}
