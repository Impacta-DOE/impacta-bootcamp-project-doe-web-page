import React, { Component } from 'react';
import { Campanha } from '../entities/Campanha';

import exemplo_imagem_background from '../images/doacao_exemplo.png';
import exemplo_imagem_background_01 from '../images/doacao_exemplo_01.jpg';
import exemplo_imagem_background_02 from '../images/doacao_exemplo_02.jpg';
import exemplo_imagem_background_03 from '../images/doacao_exemplo_03.jpg';
import exemplo_imagem_background_04 from '../images/doacao_exemplo_04.jpg';

import exemplo_imagem_background_card from '../images/blog.jpg';
import exemplo_imagem_background_card_01 from '../images/roupa.jpg';
import exemplo_imagem_background_card_02 from '../images/tablet.jpg';
import exemplo_imagem_background_card_03 from '../images/gato.jpg';
import exemplo_imagem_background_card_04 from '../images/cadeira.jpg';
import exemplo_imagem_background_card_05 from '../images/comida.jpg';

import exemplo_avatar_user from '../images/exemplo_user.png';

import logo_acnur from '../images/logo_anhcr.png';
import logo_catarias from '../images/logo_catarias.jpg';
import logo_adus from '../images/logo_adus.png';
import logo_cadeca from '../images/logo_cadeca.png';
import logo_crami from '../images/logo_crami.png';

import { Doacao } from '../entities/Doacao';
import { Organizacao } from '../entities/Organizacao';
import { HistoricoDoacao } from '../entities/HistoricoDoacao';
import Comentario from '../entities/Comentario';
import { PontosColeta } from '../entities/PontosColeta';

class CampanhaService extends Component {
    
    constructor(props) {

        super(props);

        this.itensCarousel = [

            new Campanha(
                true, 
                "campanha", 
                "2021-12-17", 
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
                            new Doacao('dinheiro', 'R$', 100.0, 50.0, [
                                new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                                new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                                new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                                new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                                new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                            ], null, null),[])
    
                    ],[],[]
                ),
                "Campanha do agasalho 01",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                0,
                exemplo_imagem_background,
                exemplo_imagem_background_card,
                new Doacao('dinheiro', 'R$', 100.0, 0, [
                    new HistoricoDoacao(true, 10.0, true, "Jonas Benavides Cardoso", "20/11/2021"),
                    new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                    new HistoricoDoacao(true, 20.0, false, "Ricardo", "20/11/2021"),
                    new HistoricoDoacao(true, 10.0, true, "Rafaella", "20/11/2021"),
                    new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                    new HistoricoDoacao(true, 5.0, true, "Julio", "20/11/2021"),
                    new HistoricoDoacao(true, 20.0, true, "Jackson", "20/11/2021"),
                ], null, null), 
                [
                    new Comentario("Jonas Benavides Cardoso", exemplo_avatar_user, "Muito bom a ideia da campanha, espero que de tudo certo :)", true),
                    new Comentario("Cleber", exemplo_avatar_user, "Espero que tenha conseguido ajudar de alguma forma", true),
                    new Comentario("Ricardo", exemplo_avatar_user, "Show!!!", false),
                    new Comentario("Rafaella", exemplo_avatar_user, "As pessoas dessa organização são muito boas. Saudades :)", true),
                    new Comentario("Jorgin", exemplo_avatar_user, "Fui ajudado antes e agora posso ajudar, obrigado.", false),
                    new Comentario("Julio", exemplo_avatar_user, "Feito :)", true),
                    new Comentario("Jackson", exemplo_avatar_user, "Boa sorte!!!", true)
                ]
            ),
            new Campanha(
                true, 
                "campanha", 
                "2021-12-17", 
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
                            new Doacao('dinheiro', 'R$', 100.0, 50.0, [
                                new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                                new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                                new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                                new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                                new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                            ])),
            
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
                            new Doacao('dinheiro', 'R$', 160.0, 130.0, [
                                new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                                new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                                new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                                new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                                new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                            ])),
                        
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
                            new Doacao('dinheiro', 'R$', 100.0, 50.0, [
                                new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                                new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                                new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                                new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                                new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                            ])),
            
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
                            new Doacao('dinheiro', 'R$', 100.0, 50.0, [
                                new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                                new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                                new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                                new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                                new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                            ])),
            
                    ],[],[]
                ),
                "Campanha do agasalho 02",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                0,
                exemplo_imagem_background_01,
                exemplo_imagem_background_card_01,
                new Doacao('item', 'peças', 100.0, 50.0, null, "roupas", [
                    new PontosColeta(1, "08370190", "Rua de exemplo 01", 20, "A", "Bairro de exemplo 01", 35, 3500105, "Roberto", false),
                    new PontosColeta(2, "08370190", "Rua de exemplo 02", 20, "A", "Bairro de exemplo 02", 35, 3500105, "Julio", false),
                    new PontosColeta(4, "08370190", "Rua de exemplo 04", 20, "A", "Bairro de exemplo 04", 35, 3500105, "Alberto", false)
                ])
            ),
            new Campanha(
                true, 
                "campanha", 
                "2021-12-17", 
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
                            new Doacao('dinheiro', 'R$', 100.0, 50.0, [
                                new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                                new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                                new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                                new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                                new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                            ])),
            
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
                            new Doacao('item', 'peças', 100.0, 50.0, [
                                new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                                new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                                new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                                new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                                new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                            ])),
            
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
                            new Doacao('item', 'unidades', 200.0, 100.0, [
                                new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                                new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                                new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                                new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                                new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                            ])),
            
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
                            new Doacao('item', 'KG', 300.0, 400.0, [
                                new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                                new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                                new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                                new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                                new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                            ])),
            
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
                            new Doacao('dinheiro', 'R$', 160.0, 130.0, [
                                new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                                new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                                new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                                new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                                new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                            ])),
                        
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
                            new Doacao('dinheiro', 'R$', 100.0, 50.0, [
                                new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                                new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                                new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                                new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                                new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                            ])),
                    ],[],[]
                ),
                "Campanha do agasalho 03",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                0,
                exemplo_imagem_background_02,
                exemplo_imagem_background_card_02,
                new Doacao('item', 'unidades', 200.0, 100.0, [
                    new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                    new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                    new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                    new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                    new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                    new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                    new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                ], "brinquedos", [
                    new PontosColeta(1, "08370190", "Rua de exemplo 01", 20, "A", "Bairro de exemplo 01", 35, 3500105, "Roberto", false),
                    new PontosColeta(2, "08370190", "Rua de exemplo 02", 20, "A", "Bairro de exemplo 02", 35, 3500105, "Julio", false),
                    new PontosColeta(4, "08370190", "Rua de exemplo 04", 20, "A", "Bairro de exemplo 04", 35, 3500105, "Alberto", false)
                ])
            ),
            new Campanha(
                true, 
                "campanha", 
                "2021-12-17", 
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
                            new Doacao('dinheiro', 'R$', 100.0, 50.0, [
                                new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                                new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                                new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                                new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                                new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                            ])),
            
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
                            new Doacao('dinheiro', 'R$', 160.0, 130.0, [
                                new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                                new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                                new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                                new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                                new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                            ])),
    
                    ],[],[]
                ),
                "Campanha do agasalho 04",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                0,
                exemplo_imagem_background_03,
                exemplo_imagem_background_card_03,
                new Doacao('item', 'KG', 300.0, 400.0, null, "alimentos", [
                    new PontosColeta(1, "08370190", "Rua de exemplo 01", 20, "A", "Bairro de exemplo 01", 35, 3500105, "Roberto", false),
                    new PontosColeta(2, "08370190", "Rua de exemplo 02", 20, "A", "Bairro de exemplo 02", 35, 3500105, "Julio", false),
                    new PontosColeta(4, "08370190", "Rua de exemplo 04", 20, "A", "Bairro de exemplo 04", 35, 3500105, "Alberto", false)
                ])
            ),
            new Campanha(
                true, 
                "campanha", 
                "2021-12-17", 
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
                            new Doacao('dinheiro', 'R$', 100.0, 50.0, [
                                new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                                new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                                new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                                new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                                new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                            ])),
            
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
    
                    ],[],[]
                ),
                "Campanha do agasalho 05",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                0,
                exemplo_imagem_background_04,
                exemplo_imagem_background_card_04,
                new Doacao('dinheiro', 'R$', 160.0, 130.0, [
                    new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                    new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                    new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                    new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                    new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                    new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                    new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                ], null, null)
            ),
            new Campanha(
                true, 
                "campanha", 
                "2021-12-17", 
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
                            new Doacao('dinheiro', 'R$', 100.0, 50.0, [
                                new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                                new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                                new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                                new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                                new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                            ])),
            
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
    
                    ],[],[]
                ),
                "Campanha do agasalho 06",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                0,
                exemplo_imagem_background,
                exemplo_imagem_background_card_05,
                new Doacao('dinheiro', 'R$', 100.0, 50.0, [
                    new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                    new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                    new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                    new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                    new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                    new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                    new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                ], null, null)
            ),
            new Campanha(
                true, 
                "campanha", 
                "2021-12-17", 
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
                            new Doacao('dinheiro', 'R$', 100.0, 50.0, [
                                new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                                new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                                new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                                new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                                new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                            ])),
            
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
    
                    ],[],[]
                ),
                "Campanha do agasalho 07",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                0,
                exemplo_imagem_background_01,
                exemplo_imagem_background_card,
                new Doacao('dinheiro', 'R$', 100.0, 50.0, [
                    new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                    new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                    new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                    new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                    new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                    new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                    new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                ], null, null)
            ),
            new Campanha(
                true, 
                "campanha", 
                "2021-12-17", 
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
                            new Doacao('dinheiro', 'R$', 100.0, 50.0, [
                                new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                                new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                                new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                                new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                                new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                            ])),
    
                    ],[],[]
                ),
                "Campanha do agasalho 08",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                0,
                exemplo_imagem_background_02,
                exemplo_imagem_background_card,
                new Doacao('dinheiro', 'R$', 200.0, 100.0, [
                    new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                    new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                    new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                    new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                    new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                    new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                    new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                ], null, null)
            ),
            new Campanha(
                true, 
                "campanha", 
                "2021-12-17", 
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
                            new Doacao('dinheiro', 'R$', 100.0, 50.0, [
                                new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                                new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                                new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                                new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                                new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                            ])),
    
                    ],[],[]
                ),
                "Campanha do agasalho 09",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                0,
                exemplo_imagem_background_03,
                exemplo_imagem_background_card,
                new Doacao('dinheiro', 'R$', 300.0, 150.0, [
                    new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                    new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                    new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                    new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                    new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                    new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                    new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                ], null, null)
            ),
            new Campanha(
                true, 
                "acao", 
                "2021-12-20", 
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
                            new Doacao('dinheiro', 'R$', 100.0, 50.0, [
                                new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                                new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                                new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                                new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                                new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                                new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                            ], null, null)
                        ),
    
                    ],[],[]
                ),
                "Campanha do agasalho 10",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                0,
                exemplo_imagem_background_04,
                exemplo_imagem_background_card,
                new Doacao('dinheiro', 'R$', 160.0, 50.0, [
                    new HistoricoDoacao(true, 10.0, true, "Jorgin", "20/11/2021"),
                    new HistoricoDoacao(false, 20.0, true, "Cleber", "20/11/2021"),
                    new HistoricoDoacao(true, 30.0, false, "Ricardo", "20/11/2021"),
                    new HistoricoDoacao(true, 100.0, true, "Rafaella", "20/11/2021"),
                    new HistoricoDoacao(false, 10.0, false, "Jorgin", "20/11/2021"),
                    new HistoricoDoacao(true, 55.0, true, "Julio", "20/11/2021"),
                    new HistoricoDoacao(true, 200.0, true, "Jackson", "20/11/2021"),
                ], null, null)
            )
        ];
    }

    getAll(){
        return this.itensCarousel;
    }

}

export default CampanhaService;