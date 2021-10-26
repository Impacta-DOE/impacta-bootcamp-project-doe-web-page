import React, { Component } from 'react';
import { ItemCarousel } from '../entities/ItemCarousel';

import exemplo_imagem_background from '../images/doacao_exemplo.png';
import exemplo_imagem_background_01 from '../images/doacao_exemplo_01.jpg';
import exemplo_imagem_background_02 from '../images/doacao_exemplo_02.jpg';
import exemplo_imagem_background_03 from '../images/doacao_exemplo_03.jpg';
import exemplo_imagem_background_04 from '../images/doacao_exemplo_04.jpg';

class ItemCarouselService extends Component {
    
    constructor(props) {

        super(props);

        this.itensCarousel = [

            new ItemCarousel(
                "Organização amigos do bem 01",
                "Campanha do agasalho",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                0,
                exemplo_imagem_background),

            new ItemCarousel(
                "Organização amigos do bem 02",
                "Campanha do agasalho",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                0,
                exemplo_imagem_background_01),

            new ItemCarousel(
                "Organização amigos do bem 03",
                "Campanha do agasalho",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                0,
                exemplo_imagem_background_02),

            new ItemCarousel(
                "Organização amigos do bem 04",
                "Campanha do agasalho",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                0,
                exemplo_imagem_background_03),

            new ItemCarousel(
                "Organização amigos do bem 05",
                "Campanha do agasalho",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
                "Aenean pellentesque dolor ante, at convallis turpis euismod a. Sed finibus nisl " +
                "eros, vitae cursus nunc pellentesque a. Integer tempor turpis et dui feugiat, " +
                "vitae gravida nisi maximus. Integer mollis finibus condimentum...",
                0,
                exemplo_imagem_background_04)
        ];
    }

    getAll(){
        return this.itensCarousel;
    }

}

export default ItemCarouselService;