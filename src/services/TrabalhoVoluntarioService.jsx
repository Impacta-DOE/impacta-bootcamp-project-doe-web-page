import React, { Component } from 'react';
import { TrabalhoVoluntario } from '../entities/TrabalhoVoluntario';
import { Campanha } from '../entities/Campanha';
import { PessoaJuridica } from '../entities/PessoaJuridica';
import { ContratoVoluntario } from '../entities/ContratoVoluntario';
import { PessoaFisica } from '../entities/PessoaFisica';
import { DadosContato } from '../entities/DadosContato';
import { Endereco } from '../entities/Endereco';

class TrabalhoVoluntarioService extends Component {

    constructor(props){
        super(props);
        this.state = {URL : 'https://impacta-doe-auth.herokuapp.com/auth/'};

        this.contratosVoluntarios = [
            new ContratoVoluntario(
                0,
                "Campanha do agasalho 01",
                new PessoaFisica(
                    new DadosContato(
                        "raphael.victor203@gmail.com",
                        "(11) 98694-8060"
                    ),
                    null,
                    new Endereco(
                        "08370-190",
                        "Estrada da Colônia",
                        "20",
                        "A",
                        "Jardim São Gonçalo",
                        35, 
                        3500105
                    ),
                    "",
                    null,
                    null,
                    "",
                    "Raphael Victor Mendes Silva",
                    "",
                    null,
                    "",
                    null
                )
            ),
            new ContratoVoluntario(
                0,
                "Campanha do agasalho 02",
                new PessoaFisica(
                    new DadosContato(
                        "raphael.victor203@gmail.com",
                        "(11) 98694-8060"
                    ),
                    null,
                    new Endereco(
                        "08370-190",
                        "Estrada da Colônia",
                        "20",
                        "A",
                        "Jardim São Gonçalo",
                        35, 
                        3500105
                    ),
                    "",
                    null,
                    null,
                    "",
                    "Raphael Victor Mendes Silva",
                    "",
                    null,
                    "",
                    null
                )
            ),
            new ContratoVoluntario(
                1,
                "Campanha do agasalho 03",
                new PessoaFisica(
                    new DadosContato(
                        "raphael.victor203@gmail.com",
                        "(11) 98694-8060"
                    ),
                    null,
                    new Endereco(
                        "08370-190",
                        "Estrada da Colônia",
                        "20",
                        "A",
                        "Jardim São Gonçalo",
                        35, 
                        3500105
                    ),
                    "",
                    null,
                    null,
                    "",
                    "Raphael Victor Mendes Silva",
                    "",
                    null,
                    "",
                    null
                )
            ),
            new ContratoVoluntario(
                2,
                "Campanha do agasalho 04",
                new PessoaFisica(
                    new DadosContato(
                        "raphael.victor203@gmail.com",
                        "(11) 98694-8060"
                    ),
                    null,
                    new Endereco(
                        "08370-190",
                        "Estrada da Colônia",
                        "20",
                        "A",
                        "Jardim São Gonçalo",
                        35, 
                        3500105
                    ),
                    "",
                    null,
                    null,
                    "",
                    "Raphael Victor Mendes Silva",
                    "",
                    null,
                    "",
                    null
                )
            ),
            new ContratoVoluntario(
                1,
                "Campanha do agasalho 05",
                new PessoaFisica(
                    new DadosContato(
                        "raphael.victor203@gmail.com",
                        "(11) 98694-8060"
                    ),
                    null,
                    new Endereco(
                        "08370-190",
                        "Estrada da Colônia",
                        "20",
                        "A",
                        "Jardim São Gonçalo",
                        35, 
                        3500105
                    ),
                    "",
                    null,
                    null,
                    "",
                    "Raphael Victor Mendes Silva",
                    "",
                    null,
                    "",
                    null
                )
            ),
        ];

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

    getVoluntariadosByOrgID(registro){
        return this.contratosVoluntarios;
    }

}

export default TrabalhoVoluntarioService;
