import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useFormikContext } from 'formik'

import { Details as Button } from '../ProductProfile/styles'
import { selectTotalPrice } from '../../store/reducers/cart'
import { close as closePayment } from '../../store/reducers/payment'
import { open as openCheckout } from '../../store/reducers/checkout'
import { InputLine, Overlay, PaymentContainer, Row, Sidebar } from './styles'

const Payment = () => {
  const { isOpen } = useSelector((state: RootState) => state.payment)
  const dispatch = useDispatch()

  const totalPrice = useSelector((state: RootState) => selectTotalPrice(state))

  const { values, handleChange, handleBlur, errors, touched, isValid } =
    useFormikContext<any>()

  const handleBackToCheckout = () => {
    dispatch(closePayment())
    dispatch(openCheckout())
  }

  const getInputError = (fieldName: string) => {
    const error = errors[fieldName]
    if (touched[fieldName] && typeof error === 'string') {
      return error
    }
    return ''
  }

  const formatPrice = (price = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <>
      <PaymentContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={() => dispatch(closePayment())} />
        <Sidebar>
          <h3>Pagamento - Valor a pagar {formatPrice(totalPrice)} </h3>
          <ul>
            <InputLine>
              <label htmlFor="cardName">Nome no cartão (*)</label>
              <input
                id="cardName"
                type="text"
                name="cardName"
                value={values.cardName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputError('cardName') ? 'input-error' : ''}
              />
            </InputLine>
            <Row>
              <InputLine>
                <label htmlFor="cardNumber">Número do cartao (*)</label>
                <input
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  value={values.cardNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputError('cardNumber') ? 'input-error' : ''}
                />
              </InputLine>
              <InputLine>
                <label htmlFor="cvv">CVV (*)</label>
                <input
                  id="cvv"
                  type="text"
                  name="cvv"
                  value={values.cvv}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputError('cvv') ? 'input-error' : ''}
                />
              </InputLine>
            </Row>
            <Row>
              <InputLine>
                <label htmlFor="expiresMonth">Mês de vencimento (*)</label>
                <input
                  id="expiresMonth"
                  type="text"
                  name="expiresMonth"
                  value={values.expiresMonth}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputError('expiresMonth') ? 'input-error' : ''}
                />
              </InputLine>
              <InputLine>
                <label htmlFor="expiresYear">Ano de vencimento (*)</label>
                <input
                  id="expiresYear"
                  type="text"
                  name="expiresYear"
                  value={values.expiresYear}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputError('expiresYear') ? 'input-error' : ''}
                />
              </InputLine>
            </Row>
          </ul>
          <button className="btn-button" type="submit">
            Finalizar o pagamento
          </button>
          <Button type="button" onClick={handleBackToCheckout}>
            Voltar para a edição de endereço
          </Button>
        </Sidebar>
      </PaymentContainer>
    </>
  )
}

export default Payment
