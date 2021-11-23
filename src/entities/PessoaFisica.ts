import { Nacionalidade } from "./Nacionalidade";
import { Pessoa } from "./Pessoa";

export class PessoaFisica extends Pessoa{

    nomeCompleto: string;
    dataNasc: Date;
    sexo: string;
    nascionalidade: Nacionalidade;
    registro: string

}