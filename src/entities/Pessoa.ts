import { DadosBancario } from "./DadosBancario";
import { DadosContato } from "./DadosContato";
import { Endereco } from "./Endereco";

export class Pessoa {

    dadosContato: DadosContato;
    dadosBancario: DadosBancario;
    endereco: Endereco;
    senha: string;
    img_avatar: object;
    img_background: object;

}