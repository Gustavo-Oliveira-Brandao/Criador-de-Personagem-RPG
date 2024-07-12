import { IMagia } from "../interfaces/imagia";
import { Ataque } from "./ataque";

export class Magia extends Ataque implements IMagia {

    tempoExecucao
    nivelMagia
    pontosMagia
    duracao
    niveisSuperiores

    constructor(atributos: any) {
        super(atributos)
        this.tempoExecucao = (<HTMLSelectElement>document.getElementById('tempo-execucao-magia')).value
        this.nivelMagia = (<HTMLSelectElement>document.getElementById('nivel-circulo')).value
        this.pontosMagia = Number((<HTMLInputElement>document.getElementById('custo-pm-magia')).value)
        this.duracao = (<HTMLInputElement>document.getElementById('duracao-magia')).value
        this.niveisSuperiores = (<HTMLInputElement>document.getElementById('niveis-superiores-magia')).value
    }
}
