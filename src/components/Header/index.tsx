import { Image, Text, Logo } from './styles'

import logoIMG from '../../assets/images/logo.png'
import backgroundIMG from '../../assets/images/fundo.png'

const Header = () => (
  <Image style={{ backgroundImage: `url(${backgroundIMG})` }}>
    <div className="container">
      <Logo src={logoIMG} alt="Logo EFOOD" />
      <Text>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Text>
    </div>
  </Image>
)

export default Header
