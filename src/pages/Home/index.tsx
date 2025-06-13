import Header from "../../components/Header"
import ProductsList from "../../components/ProductsList"
import Menu from "../../models/Menu"

import favoriteIMG from '../../assets/images/favorite.png'
import sushiIMG from '../../assets/images/comida1.png'
import dolceIMG from '../../assets/images/comida2.png'
import Footer from "../../components/Footer"

const meals: Menu[] = [
    {
        id: 1,
        title: 'Hioki Sushi',
        description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
        rating: '4.9',
        image: sushiIMG,
        infos:['Destaque da semana', 'Japonesa'],
        learnMore: 'Saiba mais',
        favorite: favoriteIMG,
    },
    {
        id: 2,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        rating: '4.6',
        image: dolceIMG,
        infos:['Italiana'],
        learnMore: 'Saiba mais',
        favorite: favoriteIMG,
    },
    {
        id: 3,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        rating: '4.6',
        image: dolceIMG,
        infos:['Italiana'],
        learnMore: 'Saiba mais',
        favorite: favoriteIMG,
    },
    {
        id: 4,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        rating: '4.6',
        image: dolceIMG,
        infos:['Italiana'],
        learnMore: 'Saiba mais',
        favorite: favoriteIMG,
    },
    {
        id: 5,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        rating: '4.6',
        image: dolceIMG,
        infos:['Italiana'],
        learnMore: 'Saiba mais',
        favorite: favoriteIMG,
    },
    {
        id: 6,
        title: 'La Dolce Vita Trattoria',
        description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
        rating: '4.6',
        image: dolceIMG,
        infos:['Italiana'],
        learnMore: 'Saiba mais',
        favorite: favoriteIMG,
    },
]

const Home = () => (
    <>
        <Header />
        <ProductsList menus={meals} />
        <Footer />
    </>
)


export default Home