import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import HeaderHome from './components/Header/HeaderHero'
import HeaderRestaurant from './components/HeaderRestaurant'
import PedidoSidebar from './components/PedidoSidebar'
import PagamentoSidebar from './components/PagamentoSidebar'
import CarrinhoSidebar from './components/CarrinhoSidebar'
import FormEntrega from './components/FormEntrega'
import { RootState } from './store/store'

const AppContent: React.FC = () => {
  const [sidebarAberto, setSidebarAberto] = useState(false)
  const [mostrarEntrega, setMostrarEntrega] = useState(false)
  const [mostrarPagamento, setMostrarPagamento] = useState(false)
  const [mostrarPedido, setMostrarPedido] = useState(false)
  const [orderId, setOrderId] = useState('')
  const location = useLocation()

  // Calcula o total do carrinho a partir do Redux
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const total = cartItems.reduce((sum, item) => sum + item.preco, 0)

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
        mostrarPagamento ? (
          <PagamentoSidebar
            total={total}
            onClose={() => {
              setSidebarAberto(false)
              setMostrarEntrega(false)
              setMostrarPagamento(false)
            }}
            onBack={() => {
              setMostrarPagamento(false)
              setMostrarEntrega(true)
            }}
            onFinalizar={() => {
              setOrderId('123456')
              setSidebarAberto(false)
              setMostrarPagamento(false)
              setMostrarPedido(true)
            }}
          />
        ) : mostrarEntrega ? (
          <FormEntrega
            onClose={() => {
              setSidebarAberto(false)
              setMostrarEntrega(false)
            }}
            onContinuar={() => {
              setMostrarEntrega(false)
              setMostrarPagamento(true)
            }}
          />
        ) : (
          <CarrinhoSidebar
            onClose={() => setSidebarAberto(false)}
            onContinuar={() => setMostrarEntrega(true)}
          />
        )
      )}
      {mostrarPedido && (
        <PedidoSidebar
          orderId={orderId}
          onClose={() => setMostrarPedido(false)}
        />
      )}
    </>
  )
}

const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
)

export default App