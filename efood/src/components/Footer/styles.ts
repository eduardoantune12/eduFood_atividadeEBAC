import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: #FFEBD9;
  border-top: 1px solid #e66767;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`

export const Logo = styled.img`
  width: 125px;
  height: 58px;
`

export const Socials = styled.div`
  display: flex;
  gap: 8px;
`

export const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
`

export const Copy = styled.p`
  width: 480px;
  height: 24px;
  color: #e66767;
  font-size: 10px;
  text-align: center;
  margin: 0;
  font-family: 'Roboto', sans-serif;
`