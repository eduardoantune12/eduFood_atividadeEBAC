import React from 'react'
import styled from 'styled-components'

// Importando bgimage e a logo do site
import bgHeader from '../../assets/images/fundoHeader.svg'
import logo from '../../assets/images/efoodLogo.svg'

const HeroContainer = styled.header`
  background-image: url(${bgHeader});
  background-size: cover;
  background-position: center;
  height: 384px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-family: 'Roboto', sans-serif;
`

const Logo = styled.img`
  width: 125px;
  height: auto;
  margin-bottom: 260px;
`

const Title = styled.h1`
  position: absolute;
  width: 540px;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  color: #e66767;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`

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