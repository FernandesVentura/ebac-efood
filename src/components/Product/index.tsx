import Tag from '../Tag'
import TagInfo from '../TagInfo'
import favoriteImg from '../../assets/images/favorite.png'
import { Card, Title, Description, TitleDiv, Infos } from './styles'
import { colors } from '../../styles'

type Props = {
  id: number
  titulo: string
  avaliacao: number
  descricao: string
  tipo: string[]
  capa: string
}

const Product = ({ id, titulo, avaliacao, descricao, tipo, capa }: Props) => {
  const getDescricao = (descricao: string) => {
    const maxLength = 230
    if (descricao.length > maxLength) {
      return descricao.slice(0, maxLength) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img src={capa} alt={titulo} />
      <div className="card-div">
        <Infos>
          {tipo.map((info, index) => (
            <TagInfo key={index}>{info}</TagInfo>
          ))}
        </Infos>
        <TitleDiv>
          <Title>{titulo}</Title>
          <div>
            <span>{avaliacao}</span>
            <img src={favoriteImg} alt="Ícone de favorito" />
          </div>
        </TitleDiv>
        <Description>{getDescricao(descricao)}</Description>
        <Tag to={`/cardapio/${id}`} backgroundColor={colors.secondaryColor}>
          {' '}
          Saiba mais
        </Tag>
      </div>
    </Card>
  )
}

export default Product
