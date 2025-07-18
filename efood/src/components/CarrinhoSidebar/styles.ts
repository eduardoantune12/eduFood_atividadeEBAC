import styled from 'styled-components'

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 20;

  display: flex;
  justify-content: flex-end;
`

export const Sidebar = styled.aside`
  background-color: #e66767;
  width: 360px;
  height: 100%;
  padding: 32px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;
  font-family: Roboto, sans-serif;
`

export const Item = styled.div`
  background-color: #ffebd9;
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  position: relative;
`

export const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 16px;
`

export const Info = styled.div`
  flex: 1;

  h3 {
    font-size: 18px;
    font-weight: 900;
    color: #e66767;
    margin: 0 0 8px 0;
  }

  span {
    font-size: 14px;
    color: #e66767;
  }
`

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #e66767;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  right: 8px;
  bottom: 8px;

  &:hover {
    opacity: 0.7;
  }
`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  color: #ffebd9;
  font-size: 14px;
  font-weight: bold;
  margin-top: auto;
`

export const Confirmar = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  padding: 8px 0;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  margin-top: 8px;
  transition: background 0.3s;

  &:hover {
    background-color: #fdd5b0;
  }
`
