import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  margin-left: 342px;
  margin-right: 172px;
`

export const ListWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1px;
  row-gap: 48px;
  justify-content: center;
  padding: 80px 0;
  background: #fff;
`

export const Card = styled.div`
  width: 472px;
  border: 1px solid #e66767;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  font-family: Roboto;
`

export const CardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`

export const CardTypes = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const CardType = styled.span`
  background: #e66767;
  color: #FFEBD9;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 0px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 16px;
  padding: 0 16px;
`

export const CardTitle = styled.h2`
  font-size: 18px;
  color: #e66767;
  font-weight: bold;
  text-align: left;
  margin: 0;
`

export const CardStars = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-right: 24px
`

export const StarImage = styled.img`
  width: 22px;
  height: 22px;
`

export const RatingNumber = styled.span`
  font-size: 18px;
  color: #e66767;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  color: #e66767;
  margin: 8px 8px 16px 16px;
  text-align: left;
  min-height: 44px;
`

export const CardButton = styled.button`
  height: 24px;
  background: #e66767;
  color: #fff;
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  margin: 8px 8px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #bf4b4b;
  }
`