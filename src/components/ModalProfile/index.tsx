import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

import {
  Overlay,
  AddButton,
  ModalContent,
  ModalInfo,
  Modal
} from '../ModalProfile/styles'
import closeIMG from '../../assets/images/closeBTN.png'

type Props = {
  modalOpen: boolean
  pratoSelecionado: Prato | null
  onClose: () => void
}

const ModalProfile = ({ modalOpen, pratoSelecionado, onClose }: Props) => {
  const dispatch = useDispatch()

  if (!pratoSelecionado) return null

  const formataPreco = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const handleAdd = () => {
    if (pratoSelecionado) {
      dispatch(add(pratoSelecionado))
      dispatch(open())
      onClose()
    }
  }

  return (
    <>
      <Modal className={modalOpen ? 'visible' : ''}>
        <Overlay onClick={onClose}></Overlay>
        <ModalContent className="container">
          <img src={pratoSelecionado.foto} alt={pratoSelecionado.nome} />
          <ModalInfo>
            <div className="title-close">
              <h4>{pratoSelecionado.nome}</h4>
              <img onClick={onClose} src={closeIMG} alt="Botão de fechar" />
            </div>
            <p>
              {pratoSelecionado.descricao}
              <br />
              <br />
              Serve de {pratoSelecionado.porcao}
            </p>
            <AddButton onClick={handleAdd}>
              Adicionar ao carrinho - {formataPreco(pratoSelecionado.preco)}
            </AddButton>
          </ModalInfo>
        </ModalContent>
      </Modal>
      <div className="overlay"></div>
    </>
  )
}

export default ModalProfile
