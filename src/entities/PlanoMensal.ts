import { Pessoa } from "./Pessoa";

export class PlanoMensal {

    id: number;
    status: boolean;
    nomePlano: string;
    valorMensal: number;
    recompensas: [];
    organizacao: Pessoa;

    constructor(id: number, status: boolean, nomePlano: string, valorMensal: number, recompensas: [], organizacao: Pessoa){
        this.id = id;
        this.status = status;
        this.nomePlano = nomePlano;
        this.valorMensal = valorMensal;
        this.recompensas = recompensas;
        this.organizacao = organizacao;
    }

}
