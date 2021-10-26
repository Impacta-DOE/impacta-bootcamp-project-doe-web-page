export class ItemCarousel {
    
    titulo : string;
    nome_campanha : string;
    desc_campanha : string;
    id_campanha : number;
    img_background : object;

    constructor (titulo : string, nome_campanha : string, desc_campanha : string, id_campanha : number, img_background : object ){
        this.titulo = titulo;
        this.nome_campanha = nome_campanha;
        this.desc_campanha = desc_campanha;
        this.id_campanha = id_campanha;
        this.img_background = img_background;
    }

}