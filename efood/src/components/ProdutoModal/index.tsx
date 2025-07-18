import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import * as S from './styles'
import pizzaImg from '../../assets/images/pizzaMarguerita.svg'

type Props = {
    onClose: () => void
}

const ProdutoModal = ({ onClose }: Props) => {
    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(
            addToCart({
                id: Date.now(),
                nome: 'Pizza Marguerita',
                preco: 60.9,
                imagem: pizzaImg
            })
        )
        onClose()
    }

    return (
        <S.Overlay onClick={onClose}>
            <S.Modal onClick={(e) => e.stopPropagation()}>
                <S.Imagem src={pizzaImg} alt="Pizza Marguerita" />
                <S.Info>
                    <S.Titulo>Pizza Marguerita</S.Titulo>
                    <S.Descricao>
                        A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião. <br /> <br />
                        Serve: de 2 a 3 pessoas
                    </S.Descricao>
                    <S.Botao onClick={handleAdd}>
                        Adicionar ao carrinho - R$ 60,90
                    </S.Botao>
                </S.Info>
            </S.Modal>
        </S.Overlay>
    )
}

export default ProdutoModal
