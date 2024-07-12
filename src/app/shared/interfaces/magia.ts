import { Ataque } from "./ataque";

export interface Magia extends Ataque {
    tempoExecucao: string;
    nivelMagia: string;
    pontosMagia: number;
    duracao: string;
    niveisSuperiores?: string;
}
