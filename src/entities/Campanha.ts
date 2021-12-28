import Comentario from "./Comentario";
import { Doacao } from "./Doacao";
//import { Organizacao } from "./Organizacao";
import { Pessoa } from "./Pessoa";
import { SolicitacaoVoluntario } from "./SolicitacaoVoluntario";

export class Campanha {
    
    status : boolean;
    tipoCampanha : string;
    dataLimite : string;
    //organizacao : Organizacao;
    organizacao : Pessoa;
    //titulo : string; //nome organização
    nome_campanha : string;
    desc_campanha : string;
    id_campanha : number;
    img_background : object;
    img_background_card : object;
    doacao : Doacao;
    comentarios : Comentario[];
    solicitacaoVoluntario : SolicitacaoVoluntario;

    constructor (
            status : boolean, 
            tipoCampanha : string, 
            dataLimite : string, 
            //organizacao : Organizacao, 
            organizacao : Pessoa, 
            nome_campanha : string, 
            desc_campanha : string, 
            id_campanha : number, 
            img_background : object, 
            img_background_card : object, 
            doacao : Doacao, 
            comentarios : Comentario[],
            solicitacaoVoluntario : SolicitacaoVoluntario
        ){
        this.status = status; 
        this.tipoCampanha = tipoCampanha ;
        this.dataLimite = dataLimite;
        this.organizacao = organizacao;
        //this.titulo = titulo;
        this.nome_campanha = nome_campanha;
        this.desc_campanha = desc_campanha;
        this.id_campanha = id_campanha;
        this.img_background = img_background;
        this.img_background_card = img_background_card;
        this.doacao = doacao;
        this.comentarios = comentarios;
        this.solicitacaoVoluntario = solicitacaoVoluntario;
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