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

import logo_acnur from '../images/logo_anhcr.png';
import logo_catarias from '../images/logo_catarias.jpg';
import logo_adus from '../images/logo_adus.png';
import logo_cadeca from '../images/logo_cadeca.png';
import logo_crami from '../images/logo_crami.png';

import { Doacao } from '../entities/Doacao';
import { Organizacao } from '../entities/Organizacao';

class CampanhaService extends Component {
    
    constructor(props) {

        super(props);

        this.itensCarousel = [

            new Campanha(
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
                new Doacao('dinheiro', 'R$', 100.0, 50.0, null)),

            new Campanha(
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
                new Doacao('item', 'peças', 100.0, 50.0, null)),

            new Campanha(
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
                new Doacao('item', 'unidades', 200.0, 100.0, null)),

            new Campanha(
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
                new Doacao('item', 'KG', 300.0, 400.0, null)),

            new Campanha(
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
                new Doacao('dinheiro', 'R$', 160.0, 130.0, null)),
            
            new Campanha(
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
                new Doacao('dinheiro', 'R$', 100.0, 50.0, null)),

            new Campanha(
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
                new Doacao('dinheiro', 'R$', 100.0, 50.0, null)),

            new Campanha(
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
                new Doacao('dinheiro', 'R$', 200.0, 100.0, null)),

            new Campanha(
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
                new Doacao('dinheiro', 'R$', 300.0, 150.0, null)),

            new Campanha(
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
                new Doacao('dinheiro', 'R$', 160.0, 50.0, null))
        ];
    }

    getAll(){
        return this.itensCarousel;
    }

}

export default CampanhaService;