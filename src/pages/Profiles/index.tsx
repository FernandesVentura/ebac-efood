import HeaderProfile from "../../components/HeaderProfile"
import BannerProfile from "../../components/BannerProfile"
import ProductsListProfile from "../../components/ProductsListProfile"
import MenuProfile from "../../models/MenuProfile"

import pizzaIMG from '../../assets/images/comida3.png'
import Footer from "../../components/Footer"

const dishes: MenuProfile[] = [
    {
        id: 1,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizzaIMG,
        cart: 'Adicionar ao carrinho',
    },
    {
        id: 2,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizzaIMG,
        cart: 'Adicionar ao carrinho',
    },
    {
        id: 3,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizzaIMG,
        cart: 'Adicionar ao carrinho',
    },
    {
        id: 4,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizzaIMG,
        cart: 'Adicionar ao carrinho',
    },
    {
        id: 5,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizzaIMG,
        cart: 'Adicionar ao carrinho',
    },
    {
        id: 6,
        title: 'Pizza Marguerita',
        description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        image: pizzaIMG,
        cart: 'Adicionar ao carrinho',
    },
]

const Profiles = () => (
    <>
        <HeaderProfile />
        <BannerProfile />
        <ProductsListProfile menusProfile={dishes} />
        <Footer />
    </>
)


export default Profiles