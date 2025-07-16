import styled from 'styled-components'
import bgHeader from '../../assets/images/fundoHeader.svg'

export const HeroContainer = styled.header`
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
  font-weight: 900;
  font-style: black;
`

 export const Logo = styled.img`
  width: 125px;
  height: auto;
  margin-bottom: 260px;
`

export const Title = styled.h1`
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