
export class Endereco {

    cep: string;
    rua: string;
    numero: number;
    complemento: string;
    bairro: string;
    idEstado: number;
    idCidade: number;
    id: number;

    constructor(
        cep: string,
        rua: string,
        numero: number,
        complemento: string,
        bairro: string,
        idEstado: number,
        idCidade: number,
        id: number
    ){
        this.cep = cep;
        this.rua = rua;
        this.numero = numero;
        this.complemento = complemento;
        this.bairro = bairro;
        this.idEstado = idEstado;
        this.idCidade = idCidade;
        this.id = id;
    }

}