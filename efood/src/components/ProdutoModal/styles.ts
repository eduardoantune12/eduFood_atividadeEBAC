import styled from 'styled-components'

export const Overlay = styled.div`
background-color: rgba(0, 0, 0, 0.8);
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 10;

display: flex;
justify-content: center;
align-items: center;
`

export const Modal = styled.div`
background-color: #e66767;
width: 1024px;
height: 344px;
display: flex;
position: relative;
padding: 32px;
`

export const Imagem = styled.img`
width: 280px;
height: 280px;
object-fit: cover;
`

export const Info = styled.div`
margin-left: 32px;
display: flex;
flex-direction: column;
`

export const Titulo = styled.h3`
font-family: 'Roboto', sans-serif;
font-weight: 900;
font-size: 18px;
color: #fff;
`


export const Descricao = styled.p`
font-family: 'Roboto', sans-serif;
font-size: 14px;
line-height: 22px;
color: #fff;
max-width: 656px;
`


export const Botao = styled.button`
width: 218px;
height: 24px;
background-color: #ffebd9;
color: #e66767;
font-family: 'Roboto', sans-serif;
font-weight: 700;
font-size: 14px;
border: none;
cursor: pointer;
`