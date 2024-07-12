export class Ataque {

    protected nome: string;
    protected temAcerto: boolean;
    protected atributoAcerto?: string;
    protected bonusAcerto?: number;
    protected temDano: boolean;
    protected atributoDano?: string;
    protected dano?: string;
    protected bonusDano?: number;
    protected tipoDano?: string;
    protected temTeste: boolean;
    protected cd?: number;
    protected atributoResistido?: string;
    protected alcance?: string;
    protected descricao?: string;

    constructor(atributos : any) {
        this.nome = (<HTMLInputElement>document.getElementById('nome-ataque')).value;
        this.atributoAcerto = (<HTMLSelectElement>document.getElementById('atributo-acerto-ataque')).value
        this.bonusAcerto = Number((<HTMLInputElement>document.getElementById('bonus-acerto')).value)
        this.atributoDano = (<HTMLSelectElement>document.getElementById('atributo-dano-ataque')).value
        this.dano = (<HTMLInputElement>document.getElementById('dano-ataque')).value
        this.bonusDano = Number((<HTMLInputElement>document.getElementById('bonus-dano')).value)
        this.tipoDano = (<HTMLInputElement>document.getElementById('tipo-dano-ataque')).value
        this.cd = Number((<HTMLInputElement>document.getElementById('cd-ataque')).value)
        this.atributoResistido = (<HTMLSelectElement>document.getElementById('atributo-resistido-ataque')).value
        this.descricao = (<HTMLInputElement>document.getElementById('descricao-ataque')).value
        this.alcance = (<HTMLInputElement>document.getElementById('alcance-ataque')).value

        let temAcerto = false
        let temDano = false
        let temTeste = false

        if ((<HTMLInputElement>document.getElementById('tem-acerto')).checked) {
            temAcerto = true
        }
        if ((<HTMLInputElement>document.getElementById("tem-dano")).checked) {
            temDano = true
        }
        if ((<HTMLInputElement>document.getElementById('tem-teste')).checked) {
            temTeste = true
        }

        this.temAcerto = temAcerto
        this.temDano = temDano
        this.temTeste = temTeste

        for (let atributo of atributos) {
            if (this.atributoAcerto === atributo.texto) {
                this.bonusAcerto += atributo.modificador
            }
            if (this.atributoDano === atributo.texto) {
                this.bonusDano += atributo.modificador
            }
        }
    }
}
