import React from 'react'
import {
    Card, CardImage, CardTypes, CardType, CardHeader, CardTitle,
    CardStars, StarImage, RatingNumber, Description, CardButton
} from './styles'
import sushiImg from '../../assets/images/sushi.svg'
import starImg from '../../assets/images/estrela.svg'

const FeaturedRestaurantCard: React.FC = () => (
    <Card>
        <CardImage src={sushiImg} alt="Hioki Sushi" />
        <CardTypes>
            <CardType>Destaque da semana</CardType>
            <CardType>Japonesa</CardType>
        </CardTypes>
        <CardHeader>
            <CardTitle>Hioki Sushi</CardTitle>
            <CardStars>
                <RatingNumber>4.9</RatingNumber>
                <StarImage src={starImg} alt="Estrela" />
            </CardStars>
        </CardHeader>
        <Description>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</Description>
        <CardButton>Saiba mais</CardButton>
    </Card>
)
export default FeaturedRestaurantCard