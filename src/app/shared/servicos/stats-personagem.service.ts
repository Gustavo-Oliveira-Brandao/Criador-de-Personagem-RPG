import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsPersonagemService {

  constructor() { }

  atributos:any =
  [
    {
      id: 'forca',
      valor: 10,
      modificador: 0,
      sigla: 'For',
      texto: 'Força'
    },
    {
      id: 'destreza',
      valor: 10,
      modificador: 0,
      sigla: 'Des',
      texto: 'Destreza'
    },
    {
      id: 'constituicao',
      valor: 10,
      modificador: 0,
      sigla: 'Con',
      texto: 'Constituição'
    },
    {
      id: 'inteligencia',
      valor: 10,
      modificador: 0,
      sigla: 'Int',
      texto: 'Inteligência'
    },
    {
      id: 'sabedoria',
      valor: 10,
      modificador: 0,
      sigla: 'Sab',
      texto: 'Sabedoria'
    },
    {
      id: 'carisma',
      valor: 10,
      modificador: 0,
      sigla: 'Car',
      texto: 'Carisma'
    }
  ]

  treinamento: any = [
    {
      id: 'Destreinado',
      grau: 'D',
      valorGrau: 0
    },
    {
      id: 'Treinado',
      grau: 'T',
      valorGrau: 2
    },
    {
      id: 'Especialista',
      grau: 'E',
      valorGrau: 4
    },
    {
      id: 'Mestre',
      grau: 'M',
      valorGrau: 6
    },
    {
      id: 'Lendario',
      grau: 'L',
      valorGrau: 8
    }
  ]

  resistencias: any = [

    {
      id: 'fortitude',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'constituicao',
      texto: 'Fortitude (Con)',
    },
    {
      id: 'reflexos',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'destreza',
      texto: 'Reflexos (Des)',
    },
    {
      id: 'vontade',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'sabedoria',
      texto: 'Vontade (Sab)',
    },
  ]
  pericias: any = [
    {
      id: 'acrobacia',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'destreza',
      texto: 'Acrobacia (Des)',
    },
    {
      id: 'arcanismo',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'inteligencia',
      texto: 'Arcanismo (Int)',
    },

    {
      id: 'atletismo',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'forca',
      texto: 'Atletismo (For)',
    },

    {
      id: 'cavalgar',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'destreza',
      texto: 'Cavalgar (Des)',
    },

    {
      id: 'conhecimento',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'inteligencia',
      texto: 'Conhecimento (Int)',
    },

    {
      id: 'conhecimento2',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'inteligencia',
      texto: 'Conhecimento (Int)',
    },

    {
      id: 'diplomacia',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'carisma',
      texto: 'Diplomacia (Car)',
    },

    {
      id: 'enganacao',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'carisma',
      texto: 'Enganação (Car)',
    },

    {
      id: 'furtividade',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'destreza',
      texto: 'Furtividade (Des)',
    },

    {
      id: 'intimidacao',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'carisma',
      texto: 'Intimidação (Car)',
    },

    {
      id: 'ladroagem',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'destreza',
      texto: 'Ladroagem (Des)',
    },

    {
      id: 'manufatura',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'inteligencia',
      texto: 'Manufatura (Int)',
    },

    {
      id: 'medicina',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'sabedoria',
      texto: 'Medicina (Sab)',
    },

    {
      id: 'natureza',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'sabedoria',
      texto: 'Natureza (Sab)',
    },

    {
      id: 'ocultismo',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'inteligencia',
      texto: 'Ocultismo (Int)',
    },

    {
      id: 'percepcao',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'sabedoria',
      passiva: 10,
      texto: 'Percepção (Sab)',
    },

    {
      id: 'perfomance',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'carisma',
      texto: 'Perfomance (Car)',
    },


    {
      id: 'religiao',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'sabedoria',
      texto: 'Religião (Sab)',
    },

    {
      id: 'sobrevivencia',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'sabedoria',
      texto: 'Sobrevivencia (Sab)',
    },

    {
      id: 'sociedade',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'inteligencia',
      texto: 'Sociedade (Int)',
    },

  ];

  atualizarAtributos(){
    for(let atributo of this.atributos){
      atributo.modificador = Math.trunc((atributo.valor - 10) / 2);
    }
    for(let pericia of this.pericias){
      for(let treinamento of this.treinamento){
        if(pericia.grau === treinamento.grau){
          pericia.bonusGrau = treinamento.valorGrau;
        }
      }
      let index = 0;
      for(let atributo of this.atributos) {
        if (pericia.atributo === atributo.id) {
          pericia.valor = this.atributos[index].modificador + pericia.bonusGrau;
        }
        index++;
      }
    }
  }
}
