import styled from 'styled-components'

export const Banner = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const Tipo = styled.span`
  position: absolute;
  top: 25px;
  left: 170px;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  font-size: 32px;
  color: #fff;
  z-index: 1;
`

export const Nome = styled.h2`
  position: absolute;
  bottom: 25px;
  left: 170px;
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 32px;
  color: #fff;
  z-index: 1;
`
