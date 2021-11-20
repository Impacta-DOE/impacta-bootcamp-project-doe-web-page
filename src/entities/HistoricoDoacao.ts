export class HistoricoDoacao { 

    exibirValorDoado : boolean;
    valorDoado : number;
    exibirNomeDoador : boolean;
    nomeDoador : string;
    dataDoacao : string;

    constructor(
        exibirValorDoado : boolean,
        valorDoado : number,
        exibirNomeDoador : boolean,
        nomeDoador : string,
        dataDoacao : string,
    ) {
        this.exibirValorDoado = exibirValorDoado;
        this.valorDoado = valorDoado;
        this.exibirNomeDoador = exibirNomeDoador;
        this.nomeDoador = nomeDoador;
        this.dataDoacao = dataDoacao;
    }

}