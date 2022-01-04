import { Pessoa } from "./Pessoa";
import { PlanoMensalRecompensa } from "./PlanoMensalRecompensa";

export class PlanoMensal {

    id: number;
    status: boolean;
    nomePlano: string;
    valorMensal: number;
    recompensas: PlanoMensalRecompensa[];
    organizacao: Pessoa;
    dataCriacao: Date;

    constructor(id: number, status: boolean, nomePlano: string, valorMensal: number, recompensas: PlanoMensalRecompensa[], organizacao: Pessoa, dataCriacao: Date){
        this.id = id;
        this.status = status;
        this.nomePlano = nomePlano;
        this.valorMensal = valorMensal;
        this.recompensas = recompensas;
        this.organizacao = organizacao;
        this.dataCriacao = dataCriacao;
    }

}
