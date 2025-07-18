import * as S from './styles'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/efoodLogo.svg'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

type Props = {
  onCartClick: () => void
}

const Header: React.FC<Props> = ({ onCartClick }) => {
  const cartLength = useSelector((state: RootState) => state.cart.items.length)

  return (
    <header>
      <S.Container>
        <S.Link href="/">Restaurantes</S.Link>
        <Link to="/">
          <S.Logo src={logo} alt="efood" />
        </Link>
        <S.Carrinho style={{ cursor: 'pointer' }} onClick={onCartClick}>
          {cartLength} produto(s) no carrinho
        </S.Carrinho>
      </S.Container>
    </header>
  )
}

export default Header
