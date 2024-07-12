export interface IAtaque {
    nome: string;
    temAcerto: boolean;
    atributoAcerto?: string;
    bonusAcerto?: number;
    temDano: boolean;
    atributoDano?: string;
    dano?: string;
    bonusDano?: number;
    tipoDano?: string;
    temTeste: boolean;
    cd?: number;
    atributoResistido?: string;
    efeitoTeste?: string;
    alcance?: string;
    descricao?: string;
}
