import { Menu } from '../../pages/Home'
import { Image, Title, Text } from './styles'

type Props = {
    restaurant: Menu
}

const BannerProfile = ({ restaurant }: Props) => {
    return (
        <Image style={{ backgroundImage: `url(${restaurant.capa})` }}>
            <div className="container">
                <Title>{restaurant.tipo}</Title>
                <Text>{restaurant.titulo}</Text>
            </div>
        </Image>
    )
}

export default BannerProfile
