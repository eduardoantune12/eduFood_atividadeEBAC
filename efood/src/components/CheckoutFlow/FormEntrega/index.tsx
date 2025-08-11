import React, { useState } from 'react'
import * as S from './styles'

type Props = {
    onClose: () => void
    onContinuar: () => void
}

const FormEntrega: React.FC<Props> = ({ onClose, onContinuar }) => {
    const [nomeRecebedor, setNomeRecebedor] = useState('')
    const [endereco, setEndereco] = useState('')
    const [cep, setCep] = useState('')
    const [cidade, setCidade] = useState('')
    const [complemento, setComplemento] = useState('')
    const [numero, setNumero] = useState('')

    function camposValidos() {
        return (
            nomeRecebedor.trim() !== '' &&
            endereco.trim() !== '' &&
            cep.trim() !== '' &&
            cidade.trim() !== '' &&
            numero.trim() !== ''
        )
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    }

    return (
        <S.Overlay onClick={onClose}>
            <S.Sidebar onClick={e => e.stopPropagation()}>
                <S.Titulo>Entrega</S.Titulo>
                <form onSubmit={handleSubmit}>
                    <S.Campo>
                        <S.Label>Quem irá receber</S.Label>
                        <S.Input
                            type="text"
                            value={nomeRecebedor}
                            onChange={e => setNomeRecebedor(e.target.value)}
                        />
                    </S.Campo>
                    <S.Campo>
                        <S.Label>Endereço</S.Label>
                        <S.Input
                            type="text"
                            value={endereco}
                            onChange={e => setEndereco(e.target.value)}
                        />
                    </S.Campo>
                    <S.Campo>
                        <S.Label>Cidade</S.Label>
                        <S.Input
                            type="text"
                            value={cidade}
                            onChange={e => setCidade(e.target.value)}
                        />
                    </S.Campo>
                    <S.Row>
                        <S.CampoHalf>
                            <S.Label>CEP</S.Label>
                            <S.Input
                                type="text"
                                value={cep}
                                onChange={e => setCep(e.target.value)}
                            />
                        </S.CampoHalf>
                        <S.CampoHalf>
                            <S.Label>Número</S.Label>
                            <S.Input
                                type="text"
                                value={numero}
                                onChange={e => setNumero(e.target.value)}
                            />
                        </S.CampoHalf>
                    </S.Row>
                    <S.Campo>
                        <S.Label>Complemento (opcional)</S.Label>
                        <S.Input
                            type="text"
                            value={complemento}
                            onChange={e => setComplemento(e.target.value)}
                        />
                    </S.Campo>
                    <S.Botao type="submit" onClick={() => {
                        if (camposValidos()) {
                            onContinuar()
                        } else {
                            alert('Preencha todos os campos obrigatórios!')
                        }
                    }}
                    >
                        Continuar com a entrega
                    </S.Botao>
                    <S.BotaoSecundario type="button" onClick={onClose}>
                        Voltar para o carrinho
                    </S.BotaoSecundario>
                </form>
            </S.Sidebar>
        </S.Overlay>
    )
}

export default FormEntrega