import React, { useState } from 'react'
import FormEntrega from './FormEntrega'
import PagamentoSidebar from './PagamentoSidebar'
import PedidoSidebar from './PedidoSidebar'

const CheckoutFlow = () => {
    const [showFormEntrega, setShowFormEntrega] = useState(true)
    const [showPagamentoSidebar, setShowPagamentoSidebar] = useState(false)
    const [showPedidoSidebar, setShowPedidoSidebar] = useState(false)
    const [orderId, setOrderId] = useState<string | number | null>(null)

    const handleContinuarEntrega = () => {
        setShowFormEntrega(false)
        setShowPagamentoSidebar(true)
    }

    const handleFinalizarPedido = async (id: string | number) => {
        try {
            const response = await fetch('/api/pedido', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id }),
            })

            const data = await response.json()
            setOrderId(data.orderId)
            setShowPagamentoSidebar(false)
            setShowPedidoSidebar(true)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            {showFormEntrega && (
                <FormEntrega
                    onClose={() => setShowFormEntrega(false)}
                    onContinuar={handleContinuarEntrega}
                />
            )}

            {showPagamentoSidebar && (
                <PagamentoSidebar
                    onClose={() => setShowPagamentoSidebar(false)}
                    onFinalizar={handleFinalizarPedido} total={0} onBack={function (): void {
                        throw new Error('Function not implemented.')
                    }}
                />
            )}
            {showPedidoSidebar && (
                <PedidoSidebar
                    orderId={orderId || ''}
                    onClose={() => setShowPedidoSidebar(false)}
                />
            )}
        </>
    )
}

export default CheckoutFlow