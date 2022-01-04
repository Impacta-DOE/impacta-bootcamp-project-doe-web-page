import React, { Component } from 'react';
import { PessoaJuridica } from '../entities/PessoaJuridica';
import { PlanoMensal } from '../entities/PlanoMensal';
import { PlanoMensalDoador } from '../entities/PlanoMensalDoador';
import { PlanoMensalRecompensa } from '../entities/PlanoMensalRecompensa';

class PlanoMensalService extends Component {

    constructor(props){
        super(props);
        this.planosMensais = [
            new PlanoMensal(
                0,
                true,
                "Plano A",
                100.0,
                [
                    new PlanoMensalRecompensa("Recompensa A"),
                    new PlanoMensalRecompensa("Recompensa B"),
                    new PlanoMensalRecompensa("Recompensa C"),
                ],
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
                )
            ),
            new PlanoMensal(
                1,
                true,
                "Plano B",
                200.0,
                [
                    new PlanoMensalRecompensa("Recompensa A"),
                    new PlanoMensalRecompensa("Recompensa B"),
                    new PlanoMensalRecompensa("Recompensa C"),
                ],
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
                )
            ),
            new PlanoMensal(
                2,
                false,
                "Plano C",
                300.0,
                [
                    new PlanoMensalRecompensa("Recompensa A"),
                    new PlanoMensalRecompensa("Recompensa B"),
                    new PlanoMensalRecompensa("Recompensa C"),
                ],
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
                )
            ),
            new PlanoMensal(
                3,
                true,
                "Plano D",
                400.0,
                [
                    new PlanoMensalRecompensa("Recompensa A"),
                    new PlanoMensalRecompensa("Recompensa B"),
                    new PlanoMensalRecompensa("Recompensa C"),
                ],
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
                )
            )
        ];
    }

    getAll(){
        return this.planosMensais;
    }

    getPlanosMensaisDoadorByUserID(id){
        let planosMensaisDoador = [
            new PlanoMensalDoador(true, new Date("2022-01-03"), this.planosMensais[0]),
            new PlanoMensalDoador(true, new Date("2022-01-03"), this.planosMensais[1]),
            new PlanoMensalDoador(true, new Date("2022-01-03"), this.planosMensais[2]),
            new PlanoMensalDoador(true, new Date("2022-01-03"), this.planosMensais[3])
        ];
        return planosMensaisDoador;
    }

}

export default PlanoMensalService;
