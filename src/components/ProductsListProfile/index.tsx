import { useParams } from 'react-router-dom'
import { useState } from 'react'

import Loader from '../Loader'
import ProductProfile from '../ProductProfile'
import { Container, List } from './styles'
import ModalProfile from '../ModalProfile'
import { useGetRestaurantByIdQuery } from '../../services/api'

const ProductsListProfile = () => {
  const { id } = useParams<{ id: string }>()
  const [modalOpen, setModalOpen] = useState(false)
  const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null)

  const {
    data: restaurant,
    isLoading,
    error
  } = useGetRestaurantByIdQuery(Number(id))

  if (isLoading) return <Loader></Loader>
  if (error || !restaurant) return <p>Erro ao carregar restaurante</p>

  return (
    <>
      <Container>
        <div className="container">
          <List>
            {restaurant.cardapio.map((item) => (
              <ProductProfile
                key={item.id}
                nome={item.nome}
                descricao={item.descricao}
                foto={item.foto}
                onClick={() => {
                  setModalOpen(true)
                  setPratoSelecionado(item)
                }}
              />
            ))}
          </List>
        </div>
      </Container>
      <ModalProfile
        modalOpen={modalOpen}
        pratoSelecionado={pratoSelecionado}
        onClose={() => {
          setModalOpen(false)
          setPratoSelecionado(null)
        }}
      />
    </>
  )
}

export default ProductsListProfile
