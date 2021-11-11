import React, { Component } from 'react';
import CampanhaService from './CampanhaService';
import OrganizacaoService from './OrganizacaoService';

class SearchService extends Component {

    constructor(props){
        super(props);
        this.state = {campanhaService : new CampanhaService(), organizacaoService : new OrganizacaoService()};
    }

    search(filtro){
        let result = [];
        if(filtro.tipoPesquisa === "campanha"){
            result = this.state.campanhaService.getAll();
        } else if (filtro.tipoPesquisa === "organizacao"){
            result = this.state.organizacaoService.getAll();
        } else {
            let resultOrg = [];
            let resultCamp = [];
        
            resultOrg = this.state.organizacaoService.getAll();
            for(let i=0; i < resultOrg.length; i++){
                result.push(resultOrg[i]);
            }

            resultCamp = this.state.campanhaService.getAll();
            for(let i=0; i < resultCamp.length; i++){
                result.push(resultCamp[i]);
            }
    
        }
        return result;
    }

}

export default SearchService;