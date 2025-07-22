import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import sushiImg from '../../assets/images/sushi.svg';
import * as S from './styles';

const FeaturedRestaurantPratos = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(
            addToCart({
                id: Date.now(),
                nome: 'Sushi Especial',
                preco: 60.9,
                imagem: sushiImg
            })
        )
    }
}
    type Props = {
        imagem: string
        titulo: string
        descricao: string
        onClick: () => void
    }
    const ProdutoCard = ({ imagem, titulo, descricao, onClick }: Props) => {
    return (
        <S.Card>
            <S.Imagem src={imagem} alt={titulo} />
            <S.Titulo>{titulo}</S.Titulo>
            <S.Descricao>{descricao}</S.Descricao>
            <S.Botao onClick={onClick}>Mais Detalhes</S.Botao>
        </S.Card>
    );
}

export default FeaturedRestaurantPratos;