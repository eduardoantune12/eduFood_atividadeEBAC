import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 32px;
`

const RestaurantCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  padding: 24px;
  width: 300px;
`

const RestaurantList: React.FC = () => {
    // Exemplo de dados mockados
    const restaurants = [
        { id: 1, name: 'Pizza Place' },
        { id: 2, name: 'Sushi House' }
    ]

    return (
        <ListContainer>
            {restaurants.map((r) => (
                <Link key={r.id} to={`/restaurant/${r.id}`}>
                    <RestaurantCard>
                        <h2>{r.name}</h2>
                        {/* Imagem, categoria e outros elementos do card conforme o Figma */}
                    </RestaurantCard>
                </Link>
            ))}
        </ListContainer>
    )
}

export default RestaurantList