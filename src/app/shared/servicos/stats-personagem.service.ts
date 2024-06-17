import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsPersonagemService {

  constructor() { }


  status: any =
    [
      {
        id: 'vida',
        vidaMaxima: 100,
        vidaAtual: 100,
        vidaTemporaria: 0,
        porcentagemVidaAtual: 75,
      },
      {
        id: 'classeArmadura',
        valor: 10
      },
      {
        id: 'deslocamento',
        valor: 30,
      }
    ]

  atributos: any =
    [
      {
        id: 'forca',
        valor: 10,
        modificador: 0,
        sigla: 'FOR',
        texto: 'Força'
      },
      {
        id: 'destreza',
        valor: 10,
        modificador: 0,
        sigla: 'DES',
        texto: 'Destreza'
      },
      {
        id: 'constituicao',
        valor: 10,
        modificador: 0,
        sigla: 'CON',
        texto: 'Constituição'
      },
      {
        id: 'inteligencia',
        valor: 10,
        modificador: 0,
        sigla: 'INT',
        texto: 'Inteligência'
      },
      {
        id: 'sabedoria',
        valor: 10,
        modificador: 0,
        sigla: 'SAB',
        texto: 'Sabedoria'
      },
      {
        id: 'carisma',
        valor: 10,
        modificador: 0,
        sigla: 'CAR',
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
      texto: 'Fortitude',
      siglaAtributo: "CON"
    },
    {
      id: 'reflexos',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'destreza',
      texto: 'Reflexos',
      siglaAtributo: 'DES'
    },
    {
      id: 'vontade',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'sabedoria',
      texto: 'Vontade',
      siglaAtributo: "SAB"
    },
  ]

  pericias: any = [
    {
      id: 'acrobacia',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'destreza',
      texto: 'Acrobacia',
      siglaAtributo: 'DES'
    },
    {
      id: 'arcanismo',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'inteligencia',
      texto: 'Arcanismo',
      siglaAtributo: 'INT'
    },

    {
      id: 'atletismo',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'forca',
      texto: 'Atletismo',
      siglaAtributo: 'FOR'
    },

    {
      id: 'cavalgar',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'destreza',
      texto: 'Cavalgar',
      siglaAtributo: 'DES'
    },

    {
      id: 'conhecimento',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'inteligencia',
      texto: 'Conhecimento',
      siglaAtributo: 'INT'
    },

    {
      id: 'conhecimento2',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'inteligencia',
      texto: 'Conhecimento',
      siglaAtributo: 'INT'
    },

    {
      id: 'diplomacia',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'carisma',
      texto: 'Diplomacia',
      siglaAtributo: 'CAR'
    },

    {
      id: 'enganacao',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'carisma',
      texto: 'Enganação',
      siglaAtributo: 'CAR'
    },

    {
      id: 'furtividade',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'destreza',
      texto: 'Furtividade',
      siglaAtributo: 'DES'
    },

    {
      id: 'intimidacao',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'carisma',
      texto: 'Intimidação',
      siglaAtributo: 'CAR'
    },

    {
      id: 'ladroagem',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'destreza',
      texto: 'Ladroagem',
      siglaAtributo: 'DES'
    },

    {
      id: 'manufatura',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'inteligencia',
      texto: 'Manufatura',
      siglaAtributo: 'INT'
    },

    {
      id: 'medicina',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'sabedoria',
      texto: 'Medicina',
      siglaAtributo: 'SAB'
    },

    {
      id: 'natureza',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'sabedoria',
      texto: 'Natureza',
      siglaAtributo: 'SAB'
    },

    {
      id: 'ocultismo',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'inteligencia',
      texto: 'Ocultismo',
      siglaAtributo: 'INT'
    },

    {
      id: 'percepcao',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'sabedoria',
      passiva: 10,
      texto: 'Percepção',
      siglaAtributo: 'SAB'
    },

    {
      id: 'perfomance',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'carisma',
      texto: 'Perfomance',
      siglaAtributo: 'CAR'
    },


    {
      id: 'religiao',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'sabedoria',
      texto: 'Religião',
      siglaAtributo: 'SAB'
    },

    {
      id: 'sobrevivencia',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'sabedoria',
      texto: 'Sobrevivencia',
      siglaAtributo: 'SAB'
    },

    {
      id: 'sociedade',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'inteligencia',
      texto: 'Sociedade',
      siglaAtributo: 'INT'
    },

  ];

  atualizarAtributos() {
    for (let atributo of this.atributos) {
      atributo.modificador = Math.trunc((atributo.valor - 10) / 2);
    }
    this.calcularResistencias();
    this.calcularPericias();
  }

  calcularResistencias() {
    for (let resistencia of this.resistencias) {
      for (let treinamento of this.treinamento) {
        if (resistencia.grau === treinamento.grau) {
          resistencia.bonusGrau = treinamento.valorGrau;
        }
      }
      let index = 0;
      for (let atributo of this.atributos) {
        if (resistencia.atributo === atributo.id) {
          resistencia.valor = this.atributos[index].modificador + resistencia.bonusGrau;
        }
        index++;
      }
    }
  }

  calcularPericias() {
    for (let pericia of this.pericias) {
      for (let treinamento of this.treinamento) {
        if (pericia.grau === treinamento.grau) {
          pericia.bonusGrau = treinamento.valorGrau;
        }
      }
      let index = 0;
      for (let atributo of this.atributos) {
        if (pericia.atributo === atributo.id) {
          pericia.valor = this.atributos[index].modificador + pericia.bonusGrau;
        }
        index++;
      }
    }
  }

}
