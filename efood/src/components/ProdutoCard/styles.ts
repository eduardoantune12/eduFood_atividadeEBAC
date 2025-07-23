import styled from 'styled-components'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  background-color: #e66767;
  border: 1px solid #e66767;
  padding: 8px;
  display: flex;
  flex-direction: column;
`

export const Imagem = styled.img`
  width: 304px;
  height: 167px;
  object-fit: cover;
  margin-left: 8px;
`

export const Titulo = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 16px;
  margin-left: 8px;
  color: #ffebd9;
`

export const Descricao = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #ffebd9;
  margin: 8px 0;
  margin-left: 8px;
  max-width: 304px;
`

export const Botao = styled.button`
  width: 304px;
  margin-bottom: 8px;
  height: 24px;
  background-color: #ffebd9;
  color: #e66767;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  border: none;
  cursor: pointer;
`