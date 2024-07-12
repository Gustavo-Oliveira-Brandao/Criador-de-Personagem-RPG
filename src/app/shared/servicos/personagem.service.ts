import { Injectable } from '@angular/core';
import { Ataque } from '../classes/ataque';
import { Magia } from '../classes/magia';
import { IHabilidade } from '../interfaces/ihabilidade';
import { IProficiencia } from '../interfaces/iproficiencia';
import { IItem } from '../interfaces/iitem';

@Injectable({
  providedIn: 'root'
})
export class PersonagemService {

  constructor() { }

  info: any =
    {
      nome: '',
      classe: '',
      origem: '',
      nivel: 1,
      vidaMaxima: 0,
      vidaAtual: 0,
      vidaTemporaria: 0,
      classeArmadura: 10,
      deslocamento: 30,
      honra: 10,
      manaMaxima: 0,
      manaAtual: 0,
    }

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
      },
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
      valorGrau: 3
    }
  ]

  resistencias: any = [

    {
      id: 'fortitude',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'constituicao',
      siglaAtributo: "CON"
    },
    {
      id: 'reflexos',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'destreza',
      siglaAtributo: 'DES'
    },
    {
      id: 'vontade',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'sabedoria',
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
      siglaAtributo: 'DES'
    },

    {
      id: 'adestrar animais',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'carisma',
      siglaAtributo: 'CAR'
    },

    {
      id: 'atletismo',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'forca',
      siglaAtributo: 'FOR'
    },

    {
      id: 'atuacão',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'carisma',
      siglaAtributo: 'CAR'
    },

    {
      id: 'cavalgar',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'destreza',
      siglaAtributo: 'DES'
    },

    {
      id: 'conhecimento',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'inteligencia',
      siglaAtributo: 'INT'
    },

    {
      id: 'cura',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'sabedoria',
      siglaAtributo: 'SAB'
    },

    {
      id: 'diplomacia',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'carisma',
      siglaAtributo: 'CAR'
    },

    {
      id: 'enganacão',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'carisma',
      siglaAtributo: 'CAR'
    },

    {
      id: 'furtividade',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'destreza',
      siglaAtributo: 'DES'
    },

    {
      id: 'identificar magia',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'inteligencia',
      siglaAtributo: 'INT'
    },

    {
      id: 'iniciativa',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'destreza',
      siglaAtributo: 'DES'
    },

    {
      id: 'intimidacão',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'carisma',
      siglaAtributo: 'CAR'
    },

    {
      id: 'intuicão',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'sabedoria',
      siglaAtributo: 'SAB'
    },

    {
      id: 'ladinagem',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'destreza',
      siglaAtributo: 'DES'
    },

    {
      id: 'obter informacão',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'carisma',
      siglaAtributo: 'CAR'
    },

    {
      id: 'ofício',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'inteligencia',
      siglaAtributo: 'INT'
    },

    {
      id: 'percepcão',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'sabedoria',
      passiva: 10,
      siglaAtributo: 'SAB'
    },

    {
      id: 'sobrevivência',
      valor: 0,
      grau: 'D',
      bonusGrau: 0,
      atributo: 'sabedoria',
      siglaAtributo: 'SAB'
    },

  ];

  proficiencias: any = []

  acoes: any = {
    habilidades: [],

    ataques: [],

    magias: [],

  }

  items: any = []

  atualizarAtributos() {
    for (let atributo of this.atributos) {
      atributo.modificador = Math.trunc((atributo.valor - 10) / 2);
    }
    this.calcularResistencias();
    this.calcularPericias();


  }

  calcularResistencias() {
    for (let resistencia of this.resistencias) {
      resistencia.bonusGrau = Math.floor(this.info.nivel / 2);
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
          pericia.bonusGrau = treinamento.valorGrau + this.info.nivel;
        }
        if (pericia.grau != treinamento.grau) {
          pericia.bonusGrau = Math.floor(this.info.nivel / 2);
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

  adicionarProficiencia() {
    let nome = (<HTMLSelectElement>document.getElementById('tipo-proficiencia'));
    let descricao = (<HTMLInputElement>document.getElementById('descricao-proficiencia'))

    let tipo;
    let texto;

    if (nome != null && descricao != null) {
      tipo = nome.value;
      texto = descricao.value;
      if (tipo != '' && texto != '') {
        let proficiencia: IProficiencia = {
          tipo: tipo,
          descricao: texto
        }
        this.proficiencias.push(proficiencia);
      } else {
        alert('Insira as infos!')
      }
    }
  }

  removerProficiencia(index: number) {
    this.proficiencias.splice(index, 1)
  }

  adicionarAtaque() {
    if ((<HTMLInputElement>document.getElementById('nome-ataque')).value != '') {
      this.acoes.ataques.push(new Ataque(this.atributos))
    }
  }

  removerAtaque(index: number) {
    this.acoes.ataques.splice(index, 1)
  }

  adicionarMagia() {
    if ((<HTMLInputElement>document.getElementById('nome-ataque')).value != '' && (<HTMLInputElement>document.getElementById('descricao-ataque')).value != '') {
      this.acoes.magias.push(new Magia(this.atributos))
      if ((<HTMLInputElement>document.getElementById("tem-dano")).checked) {
        this.acoes.ataques.push(new Magia(this.atributos))
      }
    }
  }

  removerMagia(index: number) {
    this.acoes.magias.splice(index, 1)
  }

  adicionarHabilidade() {
    const nome = (<HTMLInputElement>document.getElementById('nome-habilidade')).value;
    const descricao = (<HTMLInputElement>document.getElementById('descricao-habilidade')).value;
    const tempoExecucao = (<HTMLSelectElement>document.getElementById('tempo-execucao-habilidade')).value
    const origem = (<HTMLSelectElement>document.getElementById('origem-habilidade')).value;

    const habilidade: IHabilidade = {
      nome: nome,
      descricao: descricao,
      tempoExecucao: tempoExecucao,
      origem: origem
    }

    if (nome != '' && descricao != '') {
      this.acoes.habilidades.push(habilidade)
    }
  }

  removerHabilidade(index: number) {
    this.acoes.habilidades.splice(index, 1);
  }

  adicionarItemInventario() {
    const nome = (<HTMLInputElement>document.getElementById('nome-item')).value
    const descricao = (<HTMLInputElement>document.getElementById('descricao-item')).value
    const peso = (<HTMLInputElement>document.getElementById('peso-item')).value
    const valor = (<HTMLInputElement>document.getElementById('valor-item')).value

    const item : IItem = {
      nome: nome,
      descricao: descricao,
      peso: peso,
      valor: valor
    }

    if(nome != ''){
      this.items.push(item)
    }
  }

  removerItemInventario(index: number) {
    console.log('teste')

  }

}
