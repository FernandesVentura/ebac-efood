import Header from "../../components/Header"
import ProductsList from "../../components/ProductsList"
import Footer from "../../components/Footer"

import { useGetRestaurantsQuery } from '../../services/api'

export type Menu = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string 
    avaliacao: number
    descricao: string
    capa: string
    cardapio: Prato[]
}

export type Prato = {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
    }

const Home = () => {
    const { data: restaurants, isLoading, error } = useGetRestaurantsQuery()

    if (isLoading) return <p>Carregando restaurantes...</p>
    if (error || !restaurants) return <p>Erro ao carregar restaurantes</p>

    return (
        <>
        <Header />
        <ProductsList />
        <Footer />
        </>
    )
}

export default Home
