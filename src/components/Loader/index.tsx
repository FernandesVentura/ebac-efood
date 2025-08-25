import { BeatLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => {
  return (
    <Container>
      <BeatLoader color={colors.secondaryColor} />
    </Container>
  )
}

export default Loader
