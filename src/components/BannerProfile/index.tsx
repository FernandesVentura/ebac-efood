import { Image, Title, Text } from './styles'

import dolce from '../../assets/images/comida2.png'

const BannerProfile = () => (
    <Image style={{backgroundImage: `url(${dolce})`}}>
        <div className="container">
            <Title>Italiana</Title>
            <Text>La Dolce Vita Trattoria</Text>
        </div>
    </Image>
)

export default BannerProfile