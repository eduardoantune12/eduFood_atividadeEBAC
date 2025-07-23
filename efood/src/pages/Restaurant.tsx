import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import ApresentacaoBanner from '../components/ApresentacaoBanner'
import ProdutoCard from '../components/ProdutoCard'
import { useState } from 'react'
import ProdutoModal from '../components/ProdutoModal'
import massasImg from '../assets/images/macarraoDelicia.svg'
import pizzaImg from '../assets/images/pizzaMarguerita.svg'
import sushiImg from '../assets/images/sushi.svg'

export const restaurantes = [
  {
    id: '1',
    name: 'Hioki Sushi',
    type: 'Japonesa',
    image: sushiImg
  },
  {
    id: '2',
    name: 'La Dolce Vita Trattoria',
    type: 'Italiana',
    image: massasImg
  },
  {
    id: '3',
    name: 'La Dolce Vita Trattoria',
    type: 'Italiana',
    image: massasImg
  },
  {
    id: '4',
    name: 'La Dolce Vita Trattoria',
    type: 'Italiana',
    image: massasImg
  }
]

const Restaurant: React.FC = () => {
  const { id } = useParams()

  const [isModalOpen, setModalOpen] = useState(false)
  const abrirModal = () => setModalOpen(true)
  const fecharModal = () => setModalOpen(false)
  const restauranteSelecionado = restaurantes.find((r) => r.id === id)

  if (!restauranteSelecionado) {
    return <p>Restaurante não encontrado</p>
  }

  const pratos = restauranteSelecionado.id === '1'
    ? [
      { imagem: sushiImg, titulo: 'Sushi de salmão', descricao: 'O sushi de salmão é uma explosão de sabor com a combinação perfeita do arroz temperado e do peixe fresco, com uma textura macia e um toque salgado que derrete na boca, muitas vezes acompanhado do wasabi e molho shoyu.' },
      { imagem: sushiImg, titulo: 'Sushi de salmão', descricao: 'O sushi de salmão é uma explosão de sabor com a combinação perfeita do arroz temperado e do peixe fresco, com uma textura macia e um toque salgado que derrete na boca, muitas vezes acompanhado do wasabi e molho shoyu.' },
      { imagem: sushiImg, titulo: 'Sushi de salmão', descricao: 'O sushi de salmão é uma explosão de sabor com a combinação perfeita do arroz temperado e do peixe fresco, com uma textura macia e um toque salgado que derrete na boca, muitas vezes acompanhado do wasabi e molho shoyu.' },
      { imagem: sushiImg, titulo: 'Sushi de salmão', descricao: 'O sushi de salmão é uma explosão de sabor com a combinação perfeita do arroz temperado e do peixe fresco, com uma textura macia e um toque salgado que derrete na boca, muitas vezes acompanhado do wasabi e molho shoyu.' },
      { imagem: sushiImg, titulo: 'Sushi de salmão', descricao: 'O sushi de salmão é uma explosão de sabor com a combinação perfeita do arroz temperado e do peixe fresco, com uma textura macia e um toque salgado que derrete na boca, muitas vezes acompanhado do wasabi e molho shoyu.' },
      { imagem: sushiImg, titulo: 'Sushi de salmão', descricao: 'O sushi de salmão é uma explosão de sabor com a combinação perfeita do arroz temperado e do peixe fresco, com uma textura macia e um toque salgado que derrete na boca, muitas vezes acompanhado do wasabi e molho shoyu.' },
    ]
    : [

      { imagem: pizzaImg, titulo: 'Pizza Marguerita', descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' },
      { imagem: pizzaImg, titulo: 'Pizza Marguerita', descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' },
      { imagem: pizzaImg, titulo: 'Pizza Marguerita', descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' },
      { imagem: pizzaImg, titulo: 'Pizza Marguerita', descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' },
      { imagem: pizzaImg, titulo: 'Pizza Marguerita', descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' },
      { imagem: pizzaImg, titulo: 'Pizza Marguerita', descricao: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!' },
    ]

  return (
    <>
      <ApresentacaoBanner
        nome={restauranteSelecionado.name}
        tipo={restauranteSelecionado.type}
        imagem={restauranteSelecionado.image}
      />
      <div style={{
        maxWidth: '1024px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        columnGap: '32px',
        rowGap: '32px',
        padding: '40px 362px'
      }}>
        {pratos.map((prato, i) => (
          <ProdutoCard
            key={i}
            imagem={prato.imagem}
            titulo={prato.titulo}
            descricao={prato.descricao}
            onClick={abrirModal}
          />
        ))}
      </div>
      {isModalOpen && <ProdutoModal onClose={fecharModal} />}
      <Footer />
    </>
  )
}

export default Restaurant