import React, { Component } from 'react';
import { Acao } from '../entities/Acao';
import { Organizacao } from '../entities/Organizacao';
import { Voluntario } from '../entities/Voluntario';

import logo_acnur from '../images/logo_anhcr.png';
import logo_catarias from '../images/logo_catarias.jpg';
import logo_adus from '../images/logo_adus.png';
import logo_cadeca from '../images/logo_cadeca.png';
import logo_crami from '../images/logo_crami.png';
import { Doacao } from '../entities/Doacao';
import { Campanha } from '../entities/Campanha';

import back_acnur from '../images/back_acnur.jpg';
import back_caritas from '../images/back_caritas.jpg';
import back_adus from '../images/back_adus.jpg';
import back_cadeca from '../images/back_cadeca.png';
import back_crami from '../images/back_crami.png';

class OrganizacaoService extends Component {
    
    constructor(props){

        super(props);

        this.itensCarousel = [

            new Organizacao(
                "ACNUR",
                "Agência da ONU para Refugiados",
                logo_acnur,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                [
                    new Campanha(
                        "Organização amigos do bem 01",
                        "Campanha do agasalho 01",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 100.0, 50.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 02",
                        "Campanha do agasalho 02",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('item', 'peças', 100.0, 50.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 03",
                        "Campanha do agasalho 03",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('item', 'unidades', 200.0, 100.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 04",
                        "Campanha do agasalho 04",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('item', 'KG', 300.0, 400.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 05",
                        "Campanha do agasalho 05",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 160.0, 130.0, null)),
                    
                    new Campanha(
                        "Organização amigos do bem 06",
                        "Campanha do agasalho 06",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 100.0, 50.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 07",
                        "Campanha do agasalho 07",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 100.0, 50.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 08",
                        "Campanha do agasalho 08",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 200.0, 100.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 09",
                        "Campanha do agasalho 09",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 300.0, 150.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 10",
                        "Campanha do agasalho 10",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 160.0, 50.0, null))
                ],
                [
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                ],
                [
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                ],
                back_acnur
            ),
            new Organizacao(
                "Cáritas Brasileira",
                "Organização sem fins lucrativos",
                logo_catarias,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                [
                    new Campanha(
                        "Organização amigos do bem 01",
                        "Campanha do agasalho 01",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 100.0, 50.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 02",
                        "Campanha do agasalho 02",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('item', 'peças', 100.0, 50.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 03",
                        "Campanha do agasalho 03",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('item', 'unidades', 200.0, 100.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 04",
                        "Campanha do agasalho 04",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('item', 'KG', 300.0, 400.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 05",
                        "Campanha do agasalho 05",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 160.0, 130.0, null)),
                    
                    new Campanha(
                        "Organização amigos do bem 06",
                        "Campanha do agasalho 06",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 100.0, 50.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 07",
                        "Campanha do agasalho 07",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 100.0, 50.0, null)),
        
                ],
                [
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                ],
                [
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                ],
                back_caritas
            ),
            new Organizacao(
                "ADUS",
                "Instituto de Reintegração do Refugiado",
                logo_adus,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                [
                    new Campanha(
                        "Organização amigos do bem 01",
                        "Campanha do agasalho 01",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 100.0, 50.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 02",
                        "Campanha do agasalho 02",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('item', 'peças', 100.0, 50.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 03",
                        "Campanha do agasalho 03",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('item', 'unidades', 200.0, 100.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 04",
                        "Campanha do agasalho 04",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('item', 'KG', 300.0, 400.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 05",
                        "Campanha do agasalho 05",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 160.0, 130.0, null)),
                    
                    new Campanha(
                        "Organização amigos do bem 06",
                        "Campanha do agasalho 06",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 100.0, 50.0, null)),
                ],
                [
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                ],
                [
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                ],
                back_adus
            ),
            new Organizacao(
                "Cedeca",
                "Centro de Defesa da Criança e do Adolescente",
                logo_cadeca,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                [
                    new Campanha(
                        "Organização amigos do bem 01",
                        "Campanha do agasalho 01",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 100.0, 50.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 02",
                        "Campanha do agasalho 02",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('item', 'peças', 100.0, 50.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 03",
                        "Campanha do agasalho 03",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('item', 'unidades', 200.0, 100.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 04",
                        "Campanha do agasalho 04",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('item', 'KG', 300.0, 400.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 05",
                        "Campanha do agasalho 05",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 160.0, 130.0, null)),

                ],
                [
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                ],
                [
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                ],
                back_cadeca
            ),
            new Organizacao(
                "CRAMI",
                "Centro Regional de Atenção aos Maus Tratos na Infância",
                logo_crami,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                [
                    new Campanha(
                        "Organização amigos do bem 01",
                        "Campanha do agasalho 01",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 100.0, 50.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 02",
                        "Campanha do agasalho 02",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('item', 'peças', 100.0, 50.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 03",
                        "Campanha do agasalho 03",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('item', 'unidades', 200.0, 100.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 04",
                        "Campanha do agasalho 04",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('item', 'KG', 300.0, 400.0, null)),

                ],
                [
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                ],
                [
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                ],
                back_crami
            ),
            new Organizacao(
                "ACNUR",
                "Agência da ONU para Refugiados",
                logo_acnur,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                [
                    new Campanha(
                        "Organização amigos do bem 01",
                        "Campanha do agasalho 01",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 100.0, 50.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 02",
                        "Campanha do agasalho 02",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('item', 'peças', 100.0, 50.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 03",
                        "Campanha do agasalho 03",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('item', 'unidades', 200.0, 100.0, null)),

                ],
                [
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                ],
                [
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                ],
                back_acnur
            ),
            new Organizacao(
                "ACNUR",
                "Agência da ONU para Refugiados",
                logo_acnur,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                [
                    new Campanha(
                        "Organização amigos do bem 01",
                        "Campanha do agasalho 01",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 100.0, 50.0, null)),
        
                    new Campanha(
                        "Organização amigos do bem 02",
                        "Campanha do agasalho 02",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('item', 'peças', 100.0, 50.0, null)),

                ],
                [
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                ],
                [
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                ],
                back_acnur
            ),
            new Organizacao(
                "ACNUR",
                "Agência da ONU para Refugiados",
                logo_acnur,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                [
                    new Campanha(
                        "Organização amigos do bem 01",
                        "Campanha do agasalho 01",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 100.0, 50.0, null)),

                ],
                [
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                ],
                [
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                ],
                back_acnur
            ),
            new Organizacao(
                "ACNUR",
                "Agência da ONU para Refugiados",
                logo_acnur,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                [
                    new Campanha(
                        "Organização amigos do bem 01",
                        "Campanha do agasalho 01",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 100.0, 50.0, null)),

                ],
                [
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                ],
                [
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                ],
                back_acnur
            ),
            new Organizacao(
                "ACNUR",
                "Agência da ONU para Refugiados",
                logo_acnur,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                [
                    new Campanha(
                        "Organização amigos do bem 01",
                        "Campanha do agasalho 01",
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                        "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                        "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                        "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                        0,
                        null,
                        null,
                        new Doacao('dinheiro', 'R$', 100.0, 50.0, null)),

                ],
                [
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                    new Voluntario(),
                ],
                [
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                    new Acao(),
                ],
                back_acnur
            )

        ];
    }

    getAll(){
        return this.itensCarousel;
    }

}

export default OrganizacaoService;