import { useParams } from 'react-router-dom'

import HeaderProfile from '../../components/HeaderProfile'
import BannerProfile from '../../components/BannerProfile'
import ProductsListProfile from '../../components/ProductsListProfile'
import Footer from '../../components/Footer'

import { useGetRestaurantsQuery } from '../../services/api'

const Profiles = () => {
    const { id } = useParams<{ id: string }>()
    const { data: restaurants, isLoading, error } = useGetRestaurantsQuery()

    if (isLoading) return <h3>Carregando...</h3>
    if (error || !restaurants) return <h3>Erro ao carregar restaurantes</h3>

    const restaurant = restaurants.find((r) => r.id === Number(id))

    if (!restaurant) return <h3>Restaurante não encontrado</h3>

    return (
        <>
            <HeaderProfile />
            <BannerProfile />
            <ProductsListProfile />
            <Footer />
        </>
    )
}

export default Profiles
