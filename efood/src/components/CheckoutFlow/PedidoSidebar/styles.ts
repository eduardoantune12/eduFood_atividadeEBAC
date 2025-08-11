import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.6);
  z-index: 999;
  display: flex;
  justify-content: flex-end;
`

export const Sidebar = styled.aside`
  width: 360px;
  height: 100vh;
  background: #E66767;
  padding: 32px 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  z-index: 1000;
`

export const Titulo = styled.h2`
  color: #FFEBD9;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 24px;
`

export const Texto = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #FFEBD9;
  margin-bottom: 32px;
  max-width: 344px;
`

export const Button = styled.button`
  width: 344px;
  height: 32px;
  background: #FFEBD9;
  color: #E66767;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
  margin-right: 16px;
  align-self: center;
  text-align: center;
`