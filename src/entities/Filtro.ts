export class Filtro {

    tipoPesquisa : string;
    inputSearch : string;
    estado : string;
    cidade : string;
    tipoDoacao : string;
    registro : string;
    estadoAtual : boolean;
    cidadeAtual : boolean;
    temTrabalhoVoluntario : boolean;

    constructor(
        tipoPesquisa : string,
        inputSearch : string,
        estado : string,
        cidade : string,
        tipoDoacao : string,
        registro : string,
        estadoAtual : boolean,
        cidadeAtual : boolean,
        temTrabalhoVoluntario : boolean
    ){
        this.tipoPesquisa = tipoPesquisa;
        this.inputSearch = inputSearch;
        this.estado = estado;
        this.cidade = cidade;
        this.tipoDoacao = tipoDoacao;
        this.registro = registro;
        this.estadoAtual = estadoAtual;
        this.cidadeAtual = cidadeAtual;
        this.temTrabalhoVoluntario = temTrabalhoVoluntario;
    }

}