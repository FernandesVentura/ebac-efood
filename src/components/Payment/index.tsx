import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useFormikContext } from 'formik'
import { IMaskInput } from 'react-imask'

import { Details as Button } from '../ProductProfile/styles'
import { selectTotalPrice } from '../../store/reducers/cart'
import { close as closePayment } from '../../store/reducers/payment'
import { open as openCheckout } from '../../store/reducers/checkout'
import { InputLine, Overlay, PaymentContainer, Row, Sidebar } from './styles'

const Payment = () => {
  const { isOpen } = useSelector((state: RootState) => state.payment)
  const dispatch = useDispatch()

  const totalPrice = useSelector((state: RootState) => selectTotalPrice(state))

  const formik = useFormikContext<any>()
  const { values, handleChange, handleBlur, errors, touched, setFieldTouched } =
    formik

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

  const handleRealTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target

    handleChange(e)
    setFieldTouched(name, true, false)
  }

  const handleIMaskChange = (fieldName: string) => (value: string) => {
    const syntheticEvent = {
      target: {
        name: fieldName,
        value: value
      }
    } as React.ChangeEvent<HTMLInputElement>

    handleChange(syntheticEvent)
    setFieldTouched(fieldName, true, false)

    setTimeout(() => {
      formik.validateField(fieldName)
    }, 0)
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
                onChange={handleRealTimeChange}
                onBlur={handleBlur}
                className={getInputError('cardName') ? 'input-error' : ''}
              />
            </InputLine>
            <Row>
              <InputLine>
                <label htmlFor="cardNumber">Número do cartao (*)</label>
                <IMaskInput
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  value={values.cardNumber}
                  onAccept={handleIMaskChange('cardNumber')}
                  onBlur={handleBlur}
                  className={getInputError('cardNumber') ? 'input-error' : ''}
                  mask="0000-0000-0000-0000"
                />
              </InputLine>
              <InputLine>
                <label htmlFor="cvv">CVV (*)</label>
                <IMaskInput
                  id="cvv"
                  type="text"
                  name="cvv"
                  value={values.cvv}
                  onAccept={handleIMaskChange('cvv')}
                  onBlur={handleBlur}
                  className={getInputError('cvv') ? 'input-error' : ''}
                  mask="000"
                />
              </InputLine>
            </Row>
            <Row>
              <InputLine>
                <label htmlFor="expiresMonth">Mês de vencimento (*)</label>
                <IMaskInput
                  id="expiresMonth"
                  type="text"
                  name="expiresMonth"
                  value={values.expiresMonth}
                  onAccept={handleIMaskChange('expiresMonth')}
                  onBlur={handleBlur}
                  className={getInputError('expiresMonth') ? 'input-error' : ''}
                  mask="00"
                />
              </InputLine>
              <InputLine>
                <label htmlFor="expiresYear">Ano de vencimento (*)</label>
                <IMaskInput
                  id="expiresYear"
                  type="text"
                  name="expiresYear"
                  value={values.expiresYear}
                  onAccept={handleIMaskChange('expiresYear')}
                  onBlur={handleBlur}
                  className={getInputError('expiresYear') ? 'input-error' : ''}
                  mask="0000"
                />
              </InputLine>
            </Row>
          </ul>
          <Button className="btn-button" type="submit">
            Finalizar o pagamento
          </Button>
          <Button type="button" onClick={handleBackToCheckout}>
            Voltar para a edição de endereço
          </Button>
        </Sidebar>
      </PaymentContainer>
    </>
  )
}

export default Payment
