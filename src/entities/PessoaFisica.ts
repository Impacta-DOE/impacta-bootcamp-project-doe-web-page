import { DadosBancario } from "./DadosBancario";
import { DadosContato } from "./DadosContato";
import { Endereco } from "./Endereco";
import { Nacionalidade } from "./Nacionalidade";
import { Pessoa } from "./Pessoa";

export class PessoaFisica extends Pessoa{

    //nomeCompleto: string;
    dataNasc: Date;
    sexo: string;
    nacionalidade: Nacionalidade;
    //registro: string;

    /*constructor(){
        super(        
            new DadosContato(),
            new DadosBancario(),
            new Endereco(),
            "",
            Object,
            Object,
            ""
        );
        this.nacionalidade = new Nacionalidade();
    }*/

    constructor(        
        dadosContato: DadosContato,
        dadosBancario: DadosBancario,
        endereco: Endereco,
        senha: string,
        img_avatar: object,
        img_background: object,
        descricao: string,
        nome: string,
        registro: string,
        dataNasc: Date,
        sexo: string,
        nacionalidade: Nacionalidade
    ){
        super(        
            dadosContato,
            dadosBancario,
            endereco,
            senha,
            img_avatar,
            img_background,
            descricao,
            nome,
            registro
        );
        //this.nomeCompleto = nomeCompleto;
        this.dataNasc = dataNasc;
        this.sexo = sexo;
        this.nacionalidade = nacionalidade;
        this.registro = registro;
    }

}