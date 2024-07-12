import { IAtaque } from "./iataque";

export interface IMagia extends IAtaque {
    tempoExecucao: string;
    nivelMagia: string;
    pontosMagia: number;
    duracao: string;
    niveisSuperiores?: string;
}
