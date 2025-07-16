import React from 'react'
import RestaurantList from '../components/RestaurantList/RestaurantList'
import HeaderHero from '../components/Header/HeaderHero'
import Footer from '../components/Footer/Footer'

const Home: React.FC = () => (
    <>
        <HeaderHero />
        <RestaurantList />
        <Footer />
    </>
)

export default Home