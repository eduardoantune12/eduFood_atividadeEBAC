import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Card, CardImage, CardTypes, CardType, CardHeader, CardTitle,
    CardStars, StarImage, RatingNumber, Description, CardButton
} from './styles'
import starImg from '../../assets/images/estrela.svg'

interface Props {
    restaurante: {
        id: number
        titulo: string
        descricao: string
        avaliacao: number
        capa: string
        tipo: string
    }
}

const FeaturedRestaurantCard: React.FC<Props> = ({ restaurante }) => {
    const navigate = useNavigate()

    return (
        <Card>
            <CardImage src={restaurante.capa} alt={restaurante.titulo} />
            <CardTypes>
                <CardType>Destaque da semana</CardType>
                <CardType>{restaurante.tipo}</CardType>
            </CardTypes>
            <CardHeader>
                <CardTitle>{restaurante.titulo}</CardTitle>
                <CardStars>
                    <RatingNumber>{restaurante.avaliacao.toFixed(1)}</RatingNumber>
                    <StarImage src={starImg} alt="Estrela" />
                </CardStars>
            </CardHeader>
            <Description>{restaurante.descricao}</Description>
            <CardButton onClick={() => navigate(`/restaurant/${restaurante.id}`)}>
                Saiba mais
            </CardButton>
        </Card>
    )
}

export default FeaturedRestaurantCard