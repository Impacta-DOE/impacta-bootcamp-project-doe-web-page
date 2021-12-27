import { Campanha } from "./Campanha";

export class HistoricoDoacao { 

    exibirValorDoado : boolean;
    valorDoado : number;
    exibirNomeDoador : boolean;
    nomeDoador : string;
    dataDoacao : string;
    campanha: Campanha;

    constructor(
        exibirValorDoado : boolean,
        valorDoado : number,
        exibirNomeDoador : boolean,
        nomeDoador : string,
        dataDoacao : string,
        campanha: Campanha,
    ) {
        this.exibirValorDoado = exibirValorDoado;
        this.valorDoado = valorDoado;
        this.exibirNomeDoador = exibirNomeDoador;
        this.nomeDoador = nomeDoador;
        this.dataDoacao = dataDoacao;
        this.campanha = campanha;
    }

}