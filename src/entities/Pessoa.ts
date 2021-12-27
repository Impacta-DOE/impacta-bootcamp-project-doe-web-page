import { DadosBancario } from "./DadosBancario";
import { DadosContato } from "./DadosContato";
import { Endereco } from "./Endereco";
import { Organizacao } from "./Organizacao";

export class Pessoa extends Organizacao{

    dadosContato: DadosContato;
    dadosBancario: DadosBancario;
    endereco: Endereco;
    senha: string;
    img_avatar: object;
    img_background: object;
    descricao: string;

    constructor(){
        super(
            "",
            "",
            Object,
            "",
            [],
            [],
            [],
            Object
        );
        this.dadosContato = new DadosContato();
        this.dadosBancario = new DadosBancario();
        this.endereco = new Endereco();
    }

}