import React, { useEffect, useState } from 'react'
import * as S from './styles'

type Props = {
    onClose: () => void
    orderId: string | number
}

const PedidoSidebar: React.FC<Props> = ({ onClose, orderId }) => {
    const [orderIdState, setOrderIdState] = useState(orderId)

    useEffect(() => {
        setOrderIdState(orderId);
    }, [orderId]);

    return (
        <S.Overlay onClick={onClose}>
            <S.Sidebar>
                <S.Titulo>Pedido realizado - {orderIdState}</S.Titulo>
                <S.Texto>
                    Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido. <br />
                    <br />
                    Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. <br />
                    <br />
                    Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição. <br />
                    <br />
                    Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite! <br />
                </S.Texto>
                <S.Button onClick={onClose}>Concluir</S.Button>
            </S.Sidebar>
        </S.Overlay>
    )
}

export default PedidoSidebar