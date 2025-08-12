import { IMaskInput } from 'react-imask'
import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.6);
  z-index: 999;
`
export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100vh;
  background: #E66767;
  padding: 32px 8px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
`

export const Titulo = styled.h2`
  color: #FFEBD9;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 24px;
`

export const Campo = styled.div`
  margin-bottom: 16px;
  width: 344px;
`

export const Row = styled.div`
  display: flex;
  gap: 32px;
  margin-bottom: 16px;
  width: 344px;
`

export const CampoMaior = styled.div`
  width: 228px;
  display: flex;
  flex-direction: column;
`

export const CampoMenor = styled.div`
  width: 87px;
  display: flex;
  flex-direction: column;
`

export const CampoHalf = styled.div`
  width: 155px;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #FFEBD9;
  margin-bottom: 4px;
`

export const InputMask = styled(IMaskInput)`
  width: 100%;
  height: 32px;
  background-color: #FFEBD9;
  border: none;
  padding: 8px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #4B4B4B;
  box-sizing: border-box;
`

export const Input = styled.input`
  width: 100%;
  height: 32px;
  background-color: #FFEBD9;
  border: none;
  padding: 8px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #4B4B4B;
  box-sizing: border-box;
`

export const Botao = styled.button`
  width: 344px;
  height: 32px;
  background: #FFEBD9;
  color: #E66767;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
  margin-bottom: 8px;
  margin-top: 16px;
`

export const BotaoSecundario = styled.button`
  width: 344px;
  height: 32px;
  background: #FFEBD9;
  color: #E66767;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
`