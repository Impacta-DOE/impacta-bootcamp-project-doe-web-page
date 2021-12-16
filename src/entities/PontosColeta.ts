
export class PontosColeta {

    id: number;
    cep: string;
    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    idEstado: number;
    idCidade: number;
    responsavel: string;
    pontoSelecionado : boolean;

    constructor(
        id: number,
        cep: string, 
        rua: string, 
        numero: number, 
        complemento: string, 
        bairro: string, 
        idEstado: number, 
        idCidade: number, 
        responsavel: string,
        pontoSelecionado: boolean
    ){
        this.id = id;
        this.cep = cep;
        this.rua = rua;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.idEstado = idEstado;
        this.idCidade = idCidade;
        this.responsavel = responsavel;
        this.pontoSelecionado = pontoSelecionado;
    }

}