import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Overlay, ReceiptContainer, Row, Sidebar } from './styles'

import { Details as Button } from '../ProductProfile/styles'

import { close as closeReceipt } from '../../store/reducers/receipt'
import { RootState } from '../../store'

const Receipt = () => {
  const { isOpen, orderId } = useSelector((state: RootState) => state.receipt)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleToFinish = () => {
    dispatch(closeReceipt())
    navigate('/')
  }

  return (
    <ReceiptContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={handleToFinish} />
      <Sidebar>
        <h3>
          {orderId ? `Pedido realizado - {${orderId}}` : 'Pedido realizado'}
        </h3>
        <ul>
          <Row>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <br />
          </Row>
          <Row>
            <p>
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
            </p>
            <br />
          </Row>
          <Row>
            <p>
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
            </p>
            <br />
          </Row>
          <Row>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
          </Row>
          <br />
        </ul>
        <Button onClick={handleToFinish}>Concluir</Button>
      </Sidebar>
    </ReceiptContainer>
  )
}

export default Receipt
