import { Ataque } from "./ataque";

export class Magia extends Ataque {

    protected tempoExecucao: string;
    protected nivelMagia: string;
    protected pontosMagia: number;
    protected duracao: string;
    protected niveisSuperiores?: string;

    constructor(atributos : any){
        super(atributos)
        this.tempoExecucao = (<HTMLSelectElement>document.getElementById('tempo-execucao-magia')).value
        this.nivelMagia = (<HTMLSelectElement>document.getElementById('nivel-circulo')).value
        this.pontosMagia = Number((<HTMLInputElement>document.getElementById('custo-pm-magia')).value)
        this.duracao = (<HTMLInputElement>document.getElementById('duracao-magia')).value
        this.niveisSuperiores = (<HTMLInputElement>document.getElementById('niveis-superiores-magia')).value
    }
}
