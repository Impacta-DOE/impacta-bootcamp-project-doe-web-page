
export class PlanoMensalRecompensa {

    idPlanoMensal: number;
    status: boolean;
    descricaoRecompensa: string;

    constructor(idPlanoMensal: number, status: boolean, descricaoRecompensa: string){
        this.idPlanoMensal = idPlanoMensal;
        this.status = status;
        this.descricaoRecompensa = descricaoRecompensa;
    }

}
