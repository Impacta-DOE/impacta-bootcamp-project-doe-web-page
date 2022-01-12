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
                "Campanha do agasalho",
                new PessoaFisica(
                    new DadosContato(
                        0,
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
                        3500105,
                        0
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
                "Arrecadação de ração",
                new PessoaFisica(
                    new DadosContato(
                        0,
                        "ricardo.calixto@gmail.com",
                        "(11) 95426-5487"
                    ),
                    null,
                    new Endereco(
                        "08370-190",
                        "Estrada da Colônia",
                        "20",
                        "A",
                        "Jardim São Gonçalo",
                        35, 
                        3500105,
                        0
                    ),
                    "",
                    null,
                    null,
                    "",
                    "Ricardo Junior Leite Calixto",
                    "",
                    null,
                    "",
                    null
                )
            ),
            new ContratoVoluntario(
                1,
                "Arrecadação de materias escolares",
                new PessoaFisica(
                    new DadosContato(
                        0,
                        "jonass255@gmail.com",
                        "(11) 95446-4567"
                    ),
                    null,
                    new Endereco(
                        "08370-190",
                        "Estrada da Colônia",
                        "20",
                        "A",
                        "Jardim São Gonçalo",
                        35, 
                        3500105,
                        0
                    ),
                    "",
                    null,
                    null,
                    "",
                    "Jonas da Silva",
                    "",
                    null,
                    "",
                    null
                )
            ),
            new ContratoVoluntario(
                2,
                "Arrecadação de alimentos",
                new PessoaFisica(
                    new DadosContato(
                        0,
                        "joao.ozuna@gmail.com",
                        "(11) 98449-6577"
                    ),
                    null,
                    new Endereco(
                        "08370-190",
                        "Estrada da Colônia",
                        "20",
                        "A",
                        "Jardim São Gonçalo",
                        35, 
                        3500105,
                        0
                    ),
                    "",
                    null,
                    null,
                    "",
                    "João Henrique Ozuna",
                    "",
                    null,
                    "",
                    null
                )
            ),
            new ContratoVoluntario(
                1,
                "Arrecadação de computadores",
                new PessoaFisica(
                    new DadosContato(
                        0,
                        "guilherme.natividade@gmail.com",
                        "(11) 93226-5677"
                    ),
                    null,
                    new Endereco(
                        "08370-190",
                        "Estrada da Colônia",
                        "20",
                        "A",
                        "Jardim São Gonçalo",
                        35, 
                        3500105,
                        0
                    ),
                    "",
                    null,
                    null,
                    "",
                    "Guilherme Natividade",
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
