import { Component } from "react";
import { Campanha } from "../entities/Campanha";
import { HistoricoDoacao } from "../entities/HistoricoDoacao";
import { Organizacao } from "../entities/Organizacao";
import { PessoaJuridica } from "../entities/PessoaJuridica";

class DoacaoService extends Component {

    constructor(props){
        super(props);
        this.state = {URL : 'https://impacta-doe-api.herokuapp.com/pessoa/fisica'};
        this.historicoDoacoes = [
            new HistoricoDoacao(
                true, 
                10.0, 
                true, 
                "Jonas Benavides Cardoso", 
                "20/11/2021", 
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
                )
            ),
            new HistoricoDoacao(
                false, 
                20.0, 
                true, 
                "Cleber", 
                "20/11/2021", 
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
                )
            ),
            new HistoricoDoacao(
                true, 
                20.0, 
                false, 
                "Ricardo", 
                "20/11/2021", 
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
                )
            ),
            new HistoricoDoacao(
                true, 
                10.0, 
                true, 
                "Rafaella", 
                "20/11/2021", 
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
                )
            ),
            new HistoricoDoacao(
                false, 
                10.0, 
                false, 
                "Jorgin", 
                "20/11/2021", 
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
                )
            ),
            new HistoricoDoacao(
                true, 
                5.0, 
                true, 
                "Julio", 
                "20/11/2021",
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
                )
            ),
            new HistoricoDoacao(
                true, 
                20.0, 
                true, 
                "Jackson", 
                "20/11/2021", 
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
                )
            )
        ];

    }

    getDoacoesFromUserById(id){
        return this.historicoDoacoes;
    }

}

export default DoacaoService;
