import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Restaurant from './pages/Restaurant'

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant/:id" element={<Restaurant />} />
    </Routes>
  </Router>
)

export default App