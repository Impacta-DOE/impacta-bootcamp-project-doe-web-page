import { HistoricoDoacao } from "./HistoricoDoacao";

export class Doacao { 

    tipoArrecadacao : string; //dinheiro ou item (comida, roupa, sangue)
    unidadeMedida : string; // KG, UNIDADES, R$
    valorTotal : number;
    valorAtual : number;
    historicoDoacoes : HistoricoDoacao[];

    constructor(tipoArrecadacao : string, unidadeMedida : string, valorTotal : number, valorAtual : number, historicoDoacoes : HistoricoDoacao[]) {
        this.tipoArrecadacao = tipoArrecadacao;
        this.unidadeMedida = unidadeMedida;
        this.valorTotal = valorTotal;
        this.historicoDoacoes = historicoDoacoes;
        this.valorAtual = (this.historicoDoacoes != null) ? this.calcularTotalArrecadado() : valorAtual;
    }

    calcularTotalArrecadado(){
        let novoValorAtual = 0;
        for(let i=0; i<this.historicoDoacoes.length; i++){
            novoValorAtual += this.historicoDoacoes[i].valorDoado;
        }
        return novoValorAtual;
    }

}