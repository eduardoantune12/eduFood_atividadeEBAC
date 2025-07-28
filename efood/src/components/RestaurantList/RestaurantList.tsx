import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Container, ListWrapper, Card, CardImage, CardType, CardHeader,
    CardTitle, CardStars, StarImage, RatingNumber, Description, CardButton,
    CardTypes
} from './styles'
import FeaturedRestaurantCard from './FeaturedRestaurantCard'
import starImg from '../../assets/images/estrela.svg'
import ProdutoModal from '../ProdutoModal'

interface Restaurante {
    id: number
    titulo: string
    tipo: string
    descricao: string
    avaliacao: number
    capa: string
}

interface Props {
    restaurantes: Restaurante[]
}

const RestaurantList: React.FC<Props> = ({ restaurantes }) => {
    const navigate = useNavigate()

    const [modalAberta, setModalAberta] = useState(false)
    const [idSelecionado, setIdSelecionado] = useState<number | null>(null)

    return (
        <Container>
            <ListWrapper>
                {restaurantes.length > 0 && (
                    <FeaturedRestaurantCard restaurante={restaurantes[0]} />
                )}
                {restaurantes.slice(1).map((restaurant) => (
                    <Card key={restaurant.id}>
                        <CardImage src={restaurant.capa} alt={restaurant.titulo} />
                        <CardTypes>
                            <CardType>{restaurant.tipo}</CardType>
                        </CardTypes>
                        <CardHeader>
                            <CardTitle>{restaurant.titulo}</CardTitle>
                            <CardStars>
                                <StarImage src={starImg} alt="Estrela" />
                                <RatingNumber>{restaurant.avaliacao.toFixed(1)}</RatingNumber>
                            </CardStars>
                        </CardHeader>
                        <Description>{restaurant.descricao}</Description>
                        <CardButton
                            onClick={() => navigate(`/restaurant/${restaurant.id}`)}>
                            Saiba mais
                        </CardButton>
                    </Card>
                ))}
            </ListWrapper>

        </Container>
    )
}

export default RestaurantList