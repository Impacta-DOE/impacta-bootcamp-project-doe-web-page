import { Pessoa } from "./Pessoa";

export class ContratoVoluntario {

    status: number;
    campanhaSelecionada: string;
    voluntario: Pessoa;

    constructor(status: number, campanhaSelecionada: string, voluntario: Pessoa){
        this.status = status;
        this.campanhaSelecionada = campanhaSelecionada;
        this.voluntario = voluntario;
    }

}
