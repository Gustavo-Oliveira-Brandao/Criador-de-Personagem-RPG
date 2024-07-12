export interface Ataque {
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
    alcance?: string;
    descricao?: string;
}
