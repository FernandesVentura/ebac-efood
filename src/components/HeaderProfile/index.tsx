import { Image, Text, Logo } from './styles'

import logoIMG from '../../assets/images/logo.png'
import backgroundIMG from '../../assets/images/fundo.png'
import { Link } from 'react-router-dom'

const HeaderProfile = () => (
    <Image style={{ backgroundImage: `url(${backgroundIMG})` }}>
        <div className="container">
            <Text>Restaurante</Text>
            <Link to='/'>
                <Logo src={logoIMG} alt="Logo EFOOD" />
            </Link>
            <Text>0 Produto(s) no carrinho</Text>
        </div>
    </Image>
)

export default HeaderProfile