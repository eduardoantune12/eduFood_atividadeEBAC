import * as S from './styles'

type Props = {
    nome: string
    tipo: string
    imagem: string
}

const ApresentacaoBanner = ({ nome, tipo, imagem }: Props) => {
    return (
        <S.Banner style={{ backgroundImage: `url(${imagem})` }}>
            <S.Tipo>{tipo}</S.Tipo>
            <S.Nome>{nome}</S.Nome>
        </S.Banner>
    )
}

export default ApresentacaoBanner
