import { Doacao } from "./Doacao";
import { Organizacao } from "./Organizacao";

export class Campanha {
    
    organizacao : Organizacao;
    //titulo : string; //nome organização
    nome_campanha : string;
    desc_campanha : string;
    id_campanha : number;
    img_background : object;
    img_background_card : object;
    doacao : Doacao;

    constructor (organizacao : Organizacao, nome_campanha : string, desc_campanha : string, id_campanha : number, img_background : object, img_background_card : object, doacao : Doacao ){
        this.organizacao = organizacao;
        //this.titulo = titulo;
        this.nome_campanha = nome_campanha;
        this.desc_campanha = desc_campanha;
        this.id_campanha = id_campanha;
        this.img_background = img_background;
        this.img_background_card = img_background_card;
        this.doacao = doacao;
    }

    public resumirDescricao(qntdLetras : number) : string{
        let descricao_resumida : string = "";
        if(qntdLetras < this.desc_campanha.length && qntdLetras > 0){
            for(var i = 0; i < qntdLetras; i++){
                descricao_resumida += this.desc_campanha.charAt(i);
            }
        }
        return descricao_resumida + "...";
    }

}