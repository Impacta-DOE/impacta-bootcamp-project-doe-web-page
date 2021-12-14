import { DadosContato } from "./DadosContato";
import { Nacionalidade } from "./Nacionalidade";
import { Pessoa } from "./Pessoa";

export class PessoaFisica extends Pessoa{

    nomeCompleto: string;
    dataNasc: Date;
    sexo: string;
    nacionalidade: Nacionalidade;
    registro: string;

    constructor(){
        super();
        this.nacionalidade = new Nacionalidade();
    }

}