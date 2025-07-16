import React from 'react'
import RestaurantList from '../components/RestaurantList/RestaurantList'
import HeaderHero from '../components/Header/HeaderHero'

const Home: React.FC = () => (
    <>
        <HeaderHero />
        <RestaurantList />
    </>
)

export default Home