import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProficienciasService {

  constructor() { }

  proficiencias: any = [

  ]

  adicionarProficiencia() {
    let nome = (<HTMLSelectElement>document.getElementById('tipo'));
    let descricao = (<HTMLInputElement>document.getElementById('descricao'))

    let tipo;
    let texto;

    if (nome != null && descricao != null) {
      tipo = nome.value;
      texto = descricao.value;
      if (tipo != '' && texto != '') {
        let proficiencia = {
          nome: tipo,
          descricao: texto
        }
        this.proficiencias.push(proficiencia);
      } else {
        alert('Insira as infos!')
      }
    }

    console.log(this.proficiencias)

  }

  removerProficiencia(index: number) {
    this.proficiencias.splice(index, 1)
  }
}
