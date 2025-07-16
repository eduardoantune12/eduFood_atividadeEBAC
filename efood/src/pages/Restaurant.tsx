import React from 'react'
import { useParams } from 'react-router-dom'

const Restaurant: React.FC = () => {
    const { id } = useParams()

    return (
        <>
            <div>
                <h1>Restaurante {id}</h1>
                {/* Aqui você pode renderizar os detalhes do restaurante conforme o layout do Figma */}
            </div>
        </>
    )
}

export default Restaurant