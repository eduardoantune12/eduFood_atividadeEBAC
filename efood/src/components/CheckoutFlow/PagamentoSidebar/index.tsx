import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as S from './styles'
import { clearCart } from '../../../store/cartSlice'

type Props = {
    total: number
    onClose: () => void
    onBack: () => void
    onFinalizar: (orderId: string | number) => void
}

const PagamentoSidebar: React.FC<Props> = ({ onClose, onBack, total, onFinalizar }) => {
    const cart = useSelector((state: any) => state.cart.items)
    const entrega = useSelector((state: any) => state.checkout.delivery)
    const dispatch = useDispatch()

    const [nomeCartao, setNomeCartao] = useState('')
    const [numeroCartao, setNumeroCartao] = useState('')
    const [cvv, setCvv] = useState('')
    const [mes, setMes] = useState('')
    const [ano, setAno] = useState('')

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const pedido = {
            products: cart.map((item: any) => ({
                id: item.id,
                price: item.preco,
            })),
            delivery: entrega,
            payment: {
                card: {
                    name: nomeCartao,
                    number: numeroCartao,
                    code: Number(cvv),
                    expires: {
                        month: Number(mes),
                        year: Number(ano),
                    },
                },
            },
        }

        try {
            const response = await fetch('https://ebac-fake-api.vercel.app/api/efood/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(pedido),
            })

            const dados = await response.json()
            const orderId = dados.orderId

            dispatch(clearCart())
            onFinalizar(orderId)
            onClose()
        } catch (error) {
            console.error('Erro ao realizar o pedido:', error)
        }
    }

    return (
        <S.Overlay onClick={onClose}>
            <S.Sidebar onClick={e => e.stopPropagation()}>
                <S.Titulo>Pagamento - Valor a pagar R$ {total.toFixed(2)}</S.Titulo>
                <form onSubmit={handleSubmit}>
                    <S.Campo>
                        <S.Label>Nome no cartão</S.Label>
                        <S.Input
                            type="text"
                            value={nomeCartao}
                            onChange={e => setNomeCartao(e.target.value)}
                            required
                        />
                    </S.Campo>

                    <S.Row>
                        <S.CampoMaior>
                            <S.Label>Número do cartão</S.Label>
                            <S.InputMask
                                mask="0000 0000 0000 0000"
                                value={numeroCartao}
                                onAccept={(value: string) => setNumeroCartao(value)}
                                className={S.Input.styledComponentId} // substitua conforme seu styled-component
                                unmask={false}
                                required
                            />
                        </S.CampoMaior>

                        <S.CampoMenor>
                            <S.Label>CVV</S.Label>
                            <S.InputMask
                                mask="000"
                                value={cvv}
                                onAccept={(value: string) => setCvv(value)}
                                className={S.Input.styledComponentId}
                                unmask={false}
                                required
                            />
                        </S.CampoMenor>
                    </S.Row>

                    <S.Row>
                        <S.CampoHalf>
                            <S.Label>Mês de vencimento</S.Label>
                            <S.InputMask
                                mask="00"
                                value={mes}
                                onAccept={(value: string) => setMes(value)}
                                className={S.Input.styledComponentId}
                                unmask={false}
                                required
                            />
                        </S.CampoHalf>

                        <S.CampoHalf>
                            <S.Label>Ano de vencimento</S.Label>
                            <S.InputMask
                                mask="0000"
                                value={ano}
                                onAccept={(value: string) => setAno(value)}
                                className={S.Input.styledComponentId}
                                unmask={false}
                                required
                            />
                        </S.CampoHalf>
                    </S.Row>

                    <S.Botao type="submit">Finalizar pedido</S.Botao>
                    <S.BotaoSecundario type="button" onClick={onBack}>
                        Voltar para a edição de endereço
                    </S.BotaoSecundario>
                </form>
            </S.Sidebar>
        </S.Overlay>
    )
}

export default PagamentoSidebar
