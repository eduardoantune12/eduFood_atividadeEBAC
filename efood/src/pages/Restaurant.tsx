import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import ApresentacaoBanner from '../components/ApresentacaoBanner'
import ProdutoCard from '../components/ProdutoCard'
import ProdutoModal from '../components/ProdutoModal'

const Restaurant: React.FC = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<any>(null)
  const [isModalOpen, setModalOpen] = useState(false)
  const [produtoSelecionado, setProdutoSelecionado] = useState<any | null>(null)

  useEffect(() => {
    if (id) {
      fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((data) => setRestaurante(data))
    }
  }, [id])

  const abrirModal = (prato: any) => {
    setProdutoSelecionado(prato)
    setModalOpen(true)
  }

  const fecharModal = () => {
    setModalOpen(false)
    setProdutoSelecionado(null)
  }

  if (!restaurante) {
    return <p>Carregando restaurante...</p>
  }

  return (
    <>
      <ApresentacaoBanner
        nome={restaurante.titulo}
        tipo={restaurante.tipo}
        imagem={restaurante.capa}
      />

      <div style={{
        maxWidth: '1024px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        columnGap: '32px',
        rowGap: '32px',
        padding: '40px 362px'
      }}>
        {restaurante.cardapio.map((prato: any) => (
          <ProdutoCard
            key={prato.id}
            imagem={prato.foto}
            titulo={prato.nome}
            descricao={prato.descricao}
            onClick={() => abrirModal(prato)}
          />
        ))}
      </div>

      {isModalOpen && produtoSelecionado !== null && (
        <ProdutoModal prato={produtoSelecionado} onClose={fecharModal} />
      )}

      <Footer />
    </>
  )
}

export default Restaurant
