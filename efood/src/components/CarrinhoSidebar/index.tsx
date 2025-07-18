import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { removeFromCart } from '../../store/cartSlice';
import * as S from './styles';

type Props = {
    onClose: () => void
    onContinuar: () => void;
}

const CarrinhoSidebar = ({ onClose, onContinuar }: Props) => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    const total = cartItems.reduce((sum, item) => sum + item.preco, 0);

    return (
        <S.Overlay onClick={onClose}>
            <S.Sidebar onClick={(e) => e.stopPropagation()}>
                {cartItems.map((item) => (
                    <S.Item key={item.id}>
                        <S.Image src={item.imagem} alt={item.nome} />
                        <S.Info>
                            <h3>{item.nome}</h3>
                            <span>R$ {item.preco.toFixed(2)}</span>
                        </S.Info>
                        <S.RemoveButton onClick={() => dispatch(removeFromCart(item.id))}>
                            🗑️
                        </S.RemoveButton>
                    </S.Item>
                ))}
                <S.Total>
                    <span>Valor total</span>
                    <strong>R$ {total.toFixed(2)}</strong>
                </S.Total>
                <S.Confirmar onClick={onContinuar}>
                    Continuar com a entrega
                </S.Confirmar>
            </S.Sidebar>
        </S.Overlay>
    );
};

export default CarrinhoSidebar;
