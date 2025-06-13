import instaLogo from '../../assets/images/instagram.png'
import faceLogo from '../../assets/images/facebook.png'
import twitterLogo from '../../assets/images/twitter.png'
import logoIMG from '../../assets/images/logo.png'
import { MainFooter, Text } from './styles'


const Footer = () => (
    <MainFooter >
        <img className='logo' src={logoIMG} alt="Logo EFOOD" />
        <div>
            <span>
                <img src={instaLogo} alt="logo do Instagram" />
            </span>
            <span>
                <img className='faceLogo' src={faceLogo} alt="logo do Facebook" />
            </span>
            <span>
                <img src={twitterLogo} alt="logo do Twitter" />
            </span>
            <Text>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br /> dos produtos é toda do estabelecimento contratado. </Text>
        </div>
    </MainFooter>
)

export default Footer