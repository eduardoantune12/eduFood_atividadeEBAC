import * as S from './styles'

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
      <S.Botao onClick={onClick}>Adicionar ao carrinho</S.Botao>
    </S.Card>
  )
}

export default ProdutoCard
