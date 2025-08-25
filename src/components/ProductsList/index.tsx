import Product from '../Product'
import Loader from '../Loader'
import { Container, List } from './styles'
import { useGetRestaurantsQuery } from '../../services/api'

const ProductsList = () => {
  const { data: menus, isLoading, error } = useGetRestaurantsQuery()

  const getMenuTags = (menu: Menu) => {
    const tags: string[] = []

    if (menu.destacado) {
      tags.push('Destaque da semana')
    }

    return tags
  }

  if (isLoading) return <Loader></Loader>
  if (error || !menus) return <p>Erro ao carregar restaurantes</p>

  return (
    <Container>
      <div className="container">
        <List>
          {menus.map((menu) => (
            <Product
              key={menu.id}
              id={menu.id}
              titulo={menu.titulo}
              avaliacao={menu.avaliacao}
              descricao={menu.descricao}
              capa={menu.capa}
              tipo={[...getMenuTags(menu), menu.tipo]}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsList
