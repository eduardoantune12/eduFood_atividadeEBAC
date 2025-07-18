import React, { useState } from 'react'
import * as S from './styles'

type Props = {
    total: number
    onClose: () => void
    onBack: () => void
    onFinalizar: () => void
}

const PagamentoSidebar: React.FC<Props> = ({ onClose, onBack, total, onFinalizar }) => {
    const [nomeCartao, setNomeCartao] = useState('')
    const [numeroCartao, setNumeroCartao] = useState('')
    const [cvv, setCvv] = useState('')
    const [mes, setMes] = useState('')
    const [ano, setAno] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // lógica de pagamento (mock)
        onFinalizar()
        onClose()
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
                            <S.Input
                                type="text"
                                value={numeroCartao}
                                onChange={e => setNumeroCartao(e.target.value)}
                                required
                            />
                        </S.CampoMaior>
                        <S.CampoMenor>
                            <S.Label>CVV</S.Label>
                            <S.Input
                                type="text"
                                value={cvv}
                                onChange={e => setCvv(e.target.value)}
                                required
                            />
                        </S.CampoMenor>
                    </S.Row>
                    <S.Row>
                        <S.CampoHalf>
                            <S.Label>Mês de vencimento</S.Label>
                            <S.Input
                                type="text"
                                value={mes}
                                onChange={e => setMes(e.target.value)}
                                required
                            />
                        </S.CampoHalf>
                        <S.CampoHalf>
                            <S.Label>Ano de vencimento</S.Label>
                            <S.Input
                                type="text"
                                value={ano}
                                onChange={e => setAno(e.target.value)}
                                required
                            />
                        </S.CampoHalf>
                    </S.Row>
                    <S.Botao type="submit">Finalizar pagamento</S.Botao>
                    <S.BotaoSecundario type="button" onClick={onBack}>
                        Voltar para a edição de endereço
                    </S.BotaoSecundario>
                </form>
            </S.Sidebar>
        </S.Overlay>
    )
}

export default PagamentoSidebar