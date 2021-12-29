import React, { Component } from 'react';
import { TrabalhoVoluntario } from '../entities/TrabalhoVoluntario';
import { Campanha } from '../entities/Campanha';
import { PessoaJuridica } from '../entities/PessoaJuridica';

class TrabalhoVoluntarioService extends Component {

    constructor(props){
        super(props);
        this.state = {URL : 'https://impacta-doe-auth.herokuapp.com/auth/'};
        this.trabalhosVoluntarios = [
            new TrabalhoVoluntario(
                true,
                new Campanha(
                    true, 
                    "campanha", 
                    "2021-12-17", 
                    new PessoaJuridica(
                        null,
                        null,
                        null,
                        "",
                        Object,
                        Object,
                        "",
                        "ACNUR",
                        "123456789",
                        "Agência da ONU para Refugiados"
                    ),
                    "Campanha do agasalho 01",
                    "",
                    0,
                    null,
                    null,
                    null, 
                    [],
                    null
                ),
                new Date("2021-12-29"),
                null
            ),
            new TrabalhoVoluntario(
                false,
                new Campanha(
                    false, 
                    "campanha", 
                    "2021-12-17", 
                    new PessoaJuridica(
                        null,
                        null,
                        null,
                        "",
                        Object,
                        Object,
                        "",
                        "ACNUR",
                        "987654321",
                        "Agência da ONU para Refugiados"
                    ),
                    "Campanha do agasalho 02",
                    "",
                    0,
                    null,
                    null,
                    null, 
                    [],
                    null
                ),
                new Date("2021-12-28"),
                new Date("2021-12-29")
            ),
            new TrabalhoVoluntario(
                true,
                new Campanha(
                    true, 
                    "campanha", 
                    "2021-12-17", 
                    new PessoaJuridica(
                        null,
                        null,
                        null,
                        "",
                        Object,
                        Object,
                        "",
                        "ACNUR",
                        "123456789",
                        "Agência da ONU para Refugiados"
                    ),
                    "Campanha do agasalho 01",
                    "",
                    0,
                    null,
                    null,
                    null, 
                    [],
                    null
                ),
                new Date("2021-12-29"),
                null
            ),
        ];
    }

    getTrabalhoVoluntariosByUserID(id){
        return this.trabalhosVoluntarios;
    }

}

export default TrabalhoVoluntarioService;