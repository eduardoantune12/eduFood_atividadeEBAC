import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Link } from 'react-router-dom'
import * as S from './styles'
import logo from '../../assets/images/efoodLogo.svg'

const HeaderRestaurante = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <S.Container>
      <S.Link href="/">Restaurantes</S.Link>
      <Link to="/">
        <S.Logo src={logo} alt="efood" />
      </Link>
      <S.Carrinho>{`(${cartItems.length})`} produto(s) no carrinho</S.Carrinho>
    </S.Container>
  )
}

export default HeaderRestaurante
