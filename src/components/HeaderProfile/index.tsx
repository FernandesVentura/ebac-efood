import { Image, Text, Logo, CartButton } from './styles'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import logoIMG from '../../assets/images/logo.png'
import backgroundIMG from '../../assets/images/fundo.png'

import { open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const HeaderProfile = () => {
    const dispatch = useDispatch()

    const openCart = () => {
        dispatch(open())
    }

    const { items } = useSelector((state: RootReducer) => state.cart)

    return (
        <Image style={{ backgroundImage: `url(${backgroundIMG})` }}>
            <div className="container">
                <Text>Restaurante</Text>
                <Link to='/'>
                    <Logo src={logoIMG} alt="Logo EFOOD" />
                </Link>
                <CartButton onClick={openCart}>{items.length} Produto(s) no carrinho</CartButton>
            </div>
        </Image>
    )
}

export default HeaderProfile