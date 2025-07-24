import { useParams } from 'react-router-dom'
import { Image, Title, Text } from './styles'
import { useGetRestaurantByIdQuery } from '../../services/api'

const BannerProfile = () => {
    const { id } = useParams<{ id: string }>()
    const {  data: restaurant, isLoading} = useGetRestaurantByIdQuery(Number(id))

    if (isLoading) return <p>Carregando o banner...</p>
    if(!restaurant) return <p>Erro ao carregar restaurante</p>

    return (
        <Image style={{ backgroundImage: `url(${restaurant.capa})` }}>
            <div className="container">
                <Title>{restaurant.tipo}</Title>
                <Text>{restaurant.titulo}</Text>
            </div>
        </Image>
    )
}

export default BannerProfile
