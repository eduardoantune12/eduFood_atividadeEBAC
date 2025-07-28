import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import * as S from './styles'

type Props = {
    onClose: () => void
    prato: {
        id: number
        nome: string
        descricao: string
        preco: number
        foto: string
    }
}

const ProdutoModal = ({ onClose, prato }: Props) => {
    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(
            addToCart({
                id: Date.now(),
                nome: prato.nome,
                preco: prato.preco,
                imagem: prato.foto
            })
        )
        onClose()
    }

    return (
        <S.Overlay onClick={onClose}>
            <S.Modal onClick={(e) => e.stopPropagation()}>
                <S.Imagem src={prato.foto} alt={prato.descricao} />
                <S.Info>
                    <S.Titulo>{prato.nome}</S.Titulo>
                    <S.Descricao>{prato.descricao}</S.Descricao>
                    <S.Botao onClick={handleAdd}>
                        Adicionar ao carrinho - R$ {Number(prato.preco).toFixed(2)}
                    </S.Botao>
                </S.Info>
            </S.Modal>
        </S.Overlay>
    )
}

export default ProdutoModal
