import styled from 'styled-components'
import bgHeader from '../../assets/images/fundoHeader.svg'

export const Container = styled.header`
background-image: url(${bgHeader});
  background-color: rgba(230, 103, 103, 0.05);
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 170px;
  position: relative;
`

export const Link = styled.a`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 18px;
  color: #e66767;
  text-decoration: none;
`

export const Logo = styled.img`
  height: 57.5px;
`

export const Carrinho = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 18px;
  color: #e66767;
  text-align: right;
`
