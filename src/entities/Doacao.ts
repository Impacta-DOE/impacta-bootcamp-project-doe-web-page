import { HistoricoDoacao } from "./HistoricoDoacao";
import { PontosColeta } from "./PontosColeta";

export class Doacao { 

    tipoDoacao : string; //dinheiro ou item (comida, roupa, sangue)
    unidadeMedida : string; // KG, UNIDADES, R$
    valorTotal : number;
    valorAtual : number;
    historicoDoacoes : HistoricoDoacao[];
    tipoArrecadacao : string;
    pontosColeta : PontosColeta[];

    constructor(
            tipoDoacao : string, 
            unidadeMedida : string, 
            valorTotal : number, 
            valorAtual : number, 
            historicoDoacoes : HistoricoDoacao[],
            tipoArrecadacao : string,
            pontosColeta : PontosColeta[]

        ) {
        this.tipoDoacao = tipoDoacao;
        this.unidadeMedida = unidadeMedida;
        this.valorTotal = valorTotal;
        this.historicoDoacoes = historicoDoacoes;
        this.valorAtual = (this.historicoDoacoes != null) ? this.calcularTotalArrecadado() : valorAtual;
        this.tipoArrecadacao = tipoArrecadacao;
        this.pontosColeta = pontosColeta;
    }

    calcularTotalArrecadado(){
        let novoValorAtual = 0;
        for(let i=0; i<this.historicoDoacoes.length; i++){
            novoValorAtual += this.historicoDoacoes[i].valorDoado;
        }
        return novoValorAtual;
    }

}