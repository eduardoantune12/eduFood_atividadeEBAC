import React, {  useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import HeaderHome from './components/Header/HeaderHero'
import HeaderRestaurant from './components/HeaderRestaurant'
import CarrinhoSidebar from './components/CarrinhoSidebar'
import FormEntrega from './components/FormEntrega'

const AppContent: React.FC = () => {
  const [sidebarAberto, setSidebarAberto] = useState(false)
  const [mostrarEntrega, setMostrarEntrega] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'

  return (
    <>
      {isHome ? (
        <HeaderHome />
      ) : (
        <HeaderRestaurant onCartClick={() => setSidebarAberto(true)} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
      </Routes>
      {sidebarAberto && (
        mostrarEntrega ? (
          <FormEntrega onClose={() => {
            setSidebarAberto(false)
            setMostrarEntrega(false)
          }} />
        ) : (
          <CarrinhoSidebar
            onClose={() => setSidebarAberto(false)}
            onContinuar={() => setMostrarEntrega(true)}
          />
        )
      )}
    </>
  )
}

// Use um componente separado para usar o hook useLocation
const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
)

export default App