import { DadosBancario } from "./DadosBancario";
import { DadosContato } from "./DadosContato";
import { Endereco } from "./Endereco";
import { Organizacao } from "./Organizacao";

//export class Pessoa extends Organizacao{
export class Pessoa{

    dadosContato: DadosContato;
    dadosBancario: DadosBancario;
    endereco: Endereco;
    senha: string;
    img_avatar: object;
    img_background: object;
    descricao: string;
    nome: string;
    registro: string;

    constructor(
        dadosContato: DadosContato,
        dadosBancario: DadosBancario,
        endereco: Endereco,
        senha: string,
        img_avatar: object,
        img_background: object,
        descricao: string,
        nome: string,
        registro: string
    ){
        this.dadosContato = dadosContato;
        this.dadosBancario = dadosBancario;
        this.endereco = endereco;
        this.senha = senha;
        this.img_avatar = img_avatar;
        this.img_background = img_background;
        this.descricao = descricao;
        this.nome = nome;
        this.registro = registro;
    }

}