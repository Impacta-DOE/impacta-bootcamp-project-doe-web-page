import { Acao } from "./Acao";
import { Campanha } from "./Campanha";
import { Voluntario } from "./Voluntario";

export class Organizacao {

    nomeOrganizacao : string;
    subtituloOrganizacao : string;
    logo : object;
    descricaoOrganizacao : string;
    campanhas : Campanha[];
    voluntarios : Voluntario[];
    acoes : Acao[];
    backgroundPaginaOrg : object;

    constructor(
        nomeOrganizacao : string,
        subtituloOrganizacao : string,
        logo : object,
        descricaoOrganizacao : string,
        campanhas : Campanha[],
        voluntarios : Voluntario[],
        acoes : Acao[],
        backgroundPaginaOrg : object
    ){
        this.nomeOrganizacao = nomeOrganizacao;
        this.subtituloOrganizacao = subtituloOrganizacao;
        this.logo = logo;
        this.descricaoOrganizacao = descricaoOrganizacao;
        this.campanhas = campanhas;
        this.voluntarios = voluntarios;
        this.acoes = acoes;
        backgroundPaginaOrg = backgroundPaginaOrg;
    }

    public getQntdCampanhas(){
        return this.campanhas.length;
    }

    public getQntdVoluntarios(){
        return this.voluntarios.length;
    }

    public getQntdAcoes(){
        return this.acoes.length;
    }

}