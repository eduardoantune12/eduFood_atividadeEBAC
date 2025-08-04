// import React from 'react'
// import RestaurantList from '../../components/RestaurantList/RestaurantList'
// import Footer from '../../components/Footer/Footer'

// const Home: React.FC = () => (
//     <>
//         <RestaurantList />
//         <Footer />
//     </>
// )

// export default Home

import React, { useEffect, useState } from 'react'
import RestaurantList from '../../components/RestaurantList/RestaurantList'
import Footer from '../../components/Footer/Footer'

interface RestauranteAPI {
    id: number
    titulo: string
    tipo: string
    descricao: string
    avaliacao: number
    capa: string
}

const Home: React.FC = () => {
    const [restaurantes, setRestaurantes] = useState<RestauranteAPI[]>([])

    useEffect(() => {
        fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
            .then((res) => res.json())
            .then((dados) => setRestaurantes(dados))
    }, [])
    return (
        <>
            <RestaurantList restaurantes={restaurantes} />
            <Footer />
        </>
    )
}

export default Home
