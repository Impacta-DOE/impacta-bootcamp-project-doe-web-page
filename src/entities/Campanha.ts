import { Doacao } from "./Doacao";

export class Campanha {
    
    titulo : string;
    nome_campanha : string;
    desc_campanha : string;
    id_campanha : number;
    img_background : object;
    img_background_card : object;
    doacao : Doacao;

    constructor (titulo : string, nome_campanha : string, desc_campanha : string, id_campanha : number, img_background : object, img_background_card : object, doacao : Doacao ){
        this.titulo = titulo;
        this.nome_campanha = nome_campanha;
        this.desc_campanha = desc_campanha;
        this.id_campanha = id_campanha;
        this.img_background = img_background;
        this.img_background_card = img_background_card;
        this.doacao = doacao;
    }

}