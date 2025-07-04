import { useEffect, useState } from "react"

import Header from "../../components/Header"
import ProductsList from "../../components/ProductsList"

import Footer from "../../components/Footer"

export type Menu = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string 
    avaliacao: number
    descricao: string
    capa: string
    cardapio: []
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
    const [meals, setMeals] = useState<Menu[]>([])

    useEffect(() => {
        fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
        .then(res => res.json())
        .then(res => setMeals(res))
    }, [])

    return (
        <>
            <Header />
            <ProductsList menus={meals} />
            <Footer />
        </>
    )
}


export default Home