import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'  // para pegar id da URL

import HeaderProfile from '../../components/HeaderProfile'
import BannerProfile from '../../components/BannerProfile'
import ProductsListProfile from '../../components/ProductsListProfile'
import Footer from '../../components/Footer'

import { Menu } from '../Home'

const Profiles = () => {
    const { id } = useParams<{ id: string }>()
    const [restaurant, setRestaurant] = useState<Menu | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then(res => res.json())
        .then((data: Menu[]) => {
            const found = data.find(r => r.id === Number(id))
            setRestaurant(found || null)
            setLoading(false)
        })
    }, [id])

    if (loading) return <h3>Carregando...</h3>
    if (!restaurant) return <h3>Restaurante não encontrado</h3>

    return (
        <>
            <HeaderProfile />
            <BannerProfile restaurant={restaurant} />
            <ProductsListProfile menusProfile={restaurant.cardapio} />
            <Footer />
        </>
    )
}

export default Profiles
