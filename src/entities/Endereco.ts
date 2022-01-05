
export class Endereco {

    cep: string;
    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    idEstado: number;
    idCidade: number;

    constructor(
        cep: string,
        rua: string,
        numero: number,
        complemento: string,
        bairro: string,
        idEstado: number,
        idCidade: number
    ){
        this.cep = cep;
        this.rua = rua;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.idEstado = idEstado;
        this.idCidade = idCidade;
    }

}