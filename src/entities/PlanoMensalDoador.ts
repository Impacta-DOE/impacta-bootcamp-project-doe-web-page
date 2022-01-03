import { PlanoMensal } from "./PlanoMensal";

export class PlanoMensalDoador {

    status: boolean;
    dataContratacao: Date;
    planoMensal: PlanoMensal;

    constructor(status: boolean, dataContratacao: Date, planoMensal: PlanoMensal){
        this.status = status;
        this.dataContratacao = dataContratacao;
        this.planoMensal = planoMensal;
    }

}