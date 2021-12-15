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
    descricao: string;

    constructor(){
        this.dadosContato = new DadosContato();
        this.dadosBancario = new DadosBancario();
        this.endereco = new Endereco();
    }

}