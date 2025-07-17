import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Card, CardImage, CardTypes, CardType, CardHeader, CardTitle,
    CardStars, StarImage, RatingNumber, Description, CardButton
} from './styles'
import sushiImg from '../../assets/images/sushi.svg'
import starImg from '../../assets/images/estrela.svg'

const FeaturedRestaurantCard: React.FC = () => {
    const navigate = useNavigate()

    const restaurants = {
        id: 1,
        name: 'Hioki Sushi',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
        rating: 4.9,
        image: sushiImg
    }
    return (
    <Card>
        <CardImage src={restaurants.image} alt={restaurants.name} />
        <CardTypes>
            <CardType>Destaque da semana</CardType>
            <CardType>Japonesa</CardType>
        </CardTypes>
        <CardHeader>
            <CardTitle>{restaurants.name}</CardTitle>
            <CardStars>
                <RatingNumber>{restaurants.rating.toFixed(1)}</RatingNumber>
                <StarImage src={starImg} alt="Estrela" />
            </CardStars>
        </CardHeader>
        <Description>{restaurants.description}</Description>
        <CardButton onClick={() => navigate(`/restaurant/${restaurants.id}`)}>Saiba mais</CardButton>
    </Card>
    )
}
export default FeaturedRestaurantCard