import { Pessoa } from "./Pessoa";

export default class Comentario { 

    nomePessoa: string;
    iniciaisNome: string;
    img_avatar: object;
    comentario: string;
    exibirNomeDoador: boolean;

    constructor(nomePessoa : string, img_avatar : object, comentario : string, exibirNomeDoador : boolean){
        this.nomePessoa = nomePessoa;
        this.iniciaisNome = this.gerarIniciais(this.nomePessoa);
        this.img_avatar = img_avatar;
        this.comentario = comentario;
        this.exibirNomeDoador = exibirNomeDoador;
    }

    private gerarIniciais(nomeCompleto : string){
        let nomes = nomeCompleto.split(" ");
        return (nomes.length > 1) ? nomes[0].charAt(0).toUpperCase() + "" + nomes[1].charAt(0).toUpperCase() : nomes[0].charAt(0).toUpperCase();
    }

}