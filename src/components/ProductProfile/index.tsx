import { Card, Title, Description, Details } from './styles'

type Props = {
  nome: string
  descricao: string
  foto: string
  onClick?: () => void
}

const ProductProfile = ({ nome, descricao, foto, onClick }: Props) => {
  const getDescricao = (descricao: string) => {
    const maxLength = 160
    if (descricao.length > maxLength) {
      return descricao.slice(0, maxLength) + '...'
    }
    return descricao
  }

  return (
    <Card>
      <img src={foto} alt={nome} />
      <div className="card-div">
        <Title>{nome}</Title>
        <Description>{getDescricao(descricao)}</Description>
        <Details onClick={() => onClick?.()}>Mais detalhes</Details>
      </div>
    </Card>
  )
}

export default ProductProfile
