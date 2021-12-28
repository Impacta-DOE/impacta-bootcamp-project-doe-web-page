import { DadosBancario } from "./DadosBancario";
import { DadosContato } from "./DadosContato";
import { Endereco } from "./Endereco";
import { Pessoa } from "./Pessoa";

export class PessoaJuridica extends Pessoa{

    //cnpj: string;
    //razaoSocial: string;
    subtituloOrganizacao : string;

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
        subtituloOrganizacao : string
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
        //this.cnpj = cnpj;
        //this.razaoSocial = razaoSocial;
        this.subtituloOrganizacao = subtituloOrganizacao;
    }

}