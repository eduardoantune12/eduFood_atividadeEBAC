import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Container, ListWrapper, Card, CardImage, CardType, CardHeader,
    CardTitle, CardStars, StarImage, RatingNumber, Description, CardButton,
    CardTypes
} from './styles'
import FeaturedRestaurantCard from './FeaturedRestaurantCard'
import massasImg from '../../assets/images/macarraoDelicia.svg'
import starImg from '../../assets/images/estrela.svg'

export const restaurants = [
    {
        id: 2,
        name: 'La Dolce Vita Trattoria',
        type: 'Italiana',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        rating: 4.9,
        image: massasImg
    },
    {
        id: 3,
        name: 'La Dolce Vita Trattoria',
        type: 'Italiana',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        rating: 4.6,
        image: massasImg
    },
    {
        id: 4,
        name: 'La Dolce Vita Trattoria',
        type: 'Italiana',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        rating: 4.6,
        image: massasImg
    },
    {
        id: 5,
        name: 'La Dolce Vita Trattoria',
        type: 'Italiana',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        rating: 4.6,
        image: massasImg
    },
    {
        id: 6,
        name: 'La Dolce Vita Trattoria',
        type: 'Italiana',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        rating: 4.6,
        image: massasImg
    }
]

const RestaurantList: React.FC = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <ListWrapper>
                <FeaturedRestaurantCard />
                {restaurants.map((restaurant) => (
                    <Card key={restaurant.id}>
                        <CardImage src={restaurant.image} alt={restaurant.name} />
                        <CardTypes>
                            <CardType>{restaurant.type}</CardType>
                        </CardTypes>
                        <CardHeader>
                            <CardTitle>{restaurant.name}</CardTitle>
                            <CardStars>
                                <StarImage src={starImg} alt="Estrela" />
                                <RatingNumber>{restaurant.rating.toFixed(1)}</RatingNumber>
                            </CardStars>
                        </CardHeader>
                        <Description>{restaurant.description}</Description>
                        <CardButton
                            onClick={() => navigate(`/restaurant/${restaurant.id}`)}
                        >
                            Saiba mais
                        </CardButton>
                    </Card>
                ))}
            </ListWrapper>
        </Container>
    )
}

export default RestaurantList