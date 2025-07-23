import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/cartSlice'
import { useParams } from 'react-router-dom';
import { restaurantes } from '../../pages/Restaurant';

import * as S from './styles'
import pizzaImg from '../../assets/images/pizzaMarguerita.svg'
import sushiImg from '../../assets/images/sushi.svg'

type Props = {
    onClose: () => void
}

const ProdutoModal = ({ onClose }: Props) => {
    const { id } = useParams();
    const restauranteSelecionado = restaurantes.find((r) => r.id === id);

    const dispatch = useDispatch()

    const handleAdd = (prato: { imagem: string; titulo: string; descricao: string; preco: number }) => {
        dispatch(
            addToCart({
                id: Date.now(),
                nome: prato.titulo,
                preco: prato.preco,
                imagem: prato.imagem
            })
        )
        onClose()
    }

    const pratos = restauranteSelecionado && restauranteSelecionado.id === '1'
        ? [
            { imagem: sushiImg, titulo: 'Sushi de salmão', descricao:'Delicie-se com a suavidade do nosso sushi de salmão, preparado com peixe fresco e arroz temperado. Uma explosão de sabor que combina a tradição japonesa com ingredientes selecionados. Ideal para um almoço leve. Cada peça é uma obra de arte, perfeita para os amantes da culinária japonesa. Experimente a combinação perfeita de tradição e sabor, com a garantia de frescor e qualidade em cada mordida. O sushi de salmão é uma experiência gastronômica que agrada a todos os paladares, ideal para compartilhar com amigos ou desfrutar em um momento especial.', preco: 60.90 },
            { imagem: sushiImg, titulo: 'Sushi de salmão', descricao:'Delicie-se com a suavidade do nosso sushi de salmão, preparado com peixe fresco e arroz temperado. Uma explosão de sabor que combina a tradição japonesa com ingredientes selecionados. Ideal para um almoço leve. Cada peça é uma obra de arte, perfeita para os amantes da culinária japonesa. Experimente a combinação perfeita de tradição e sabor, com a garantia de frescor e qualidade em cada mordida. O sushi de salmão é uma experiência gastronômica que agrada a todos os paladares, ideal para compartilhar com amigos ou desfrutar em um momento especial.', preco: 60.90 },
            { imagem: sushiImg, titulo: 'Sushi de salmão', descricao:'Delicie-se com a suavidade do nosso sushi de salmão, preparado com peixe fresco e arroz temperado. Uma explosão de sabor que combina a tradição japonesa com ingredientes selecionados. Ideal para um almoço leve. Cada peça é uma obra de arte, perfeita para os amantes da culinária japonesa. Experimente a combinação perfeita de tradição e sabor, com a garantia de frescor e qualidade em cada mordida. O sushi de salmão é uma experiência gastronômica que agrada a todos os paladares, ideal para compartilhar com amigos ou desfrutar em um momento especial.', preco: 60.90 },
        ]
        : [
            { imagem: pizzaImg, titulo: 'Pizza Marguerita', descricao: 'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.', preco: 60.90 },
            { imagem: pizzaImg, titulo: 'Pizza Marguerita', descricao: 'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.', preco: 60.90 },
            { imagem: pizzaImg, titulo: 'Pizza Marguerita', descricao: 'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.', preco: 60.90 },
        ]

    const imagem = pratos[0].imagem
    const descricao = pratos[0].descricao

    return (
        <S.Overlay onClick={onClose}>
            <S.Modal onClick={(e) => e.stopPropagation()}>
                <S.Imagem src={imagem} alt={descricao} />
                <S.Info>
                    <S.Titulo>{pratos[0].titulo}</S.Titulo>
                    <S.Descricao>
                        {descricao}
                    </S.Descricao>
                    <S.Botao onClick={() => handleAdd(pratos[0])}>
                        Adicionar ao carrinho - R$ {pratos[0].preco}
                    </S.Botao>
                </S.Info>
            </S.Modal>
        </S.Overlay>
    )
}

export default ProdutoModal
