import React from 'react'
import { Logo, Title, HeroContainer } from './styles'

// Importando bgimage e a logo do site
import logo from '../../assets/images/efoodLogo.svg'

const HeaderHero: React.FC = () => {
  return (
    <HeroContainer>
      <Logo src={logo} alt="efood logo" />
      <Title>
        Viva experiências gastronômicas no conforto da sua casa
      </Title>
    </HeroContainer>
  )
}

export default HeaderHero