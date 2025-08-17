import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { open as openPayment } from '../../store/reducers/payment'
import { close as closeCheckout } from '../../store/reducers/checkout'
import { open as openCart } from '../../store/reducers/cart'
import { CheckoutContainer, InputLine, Overlay, Sidebar, Row } from './styles'
import { Details as Button } from '../ProductProfile/styles'
import { useFormikContext } from 'formik'

const CheckoutForm = () => {
  const { isOpen } = useSelector((state: RootState) => state.checkout)
  const dispatch = useDispatch()

  const {
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    validateForm,
    setTouched
  } = useFormikContext<any>()

  const handleBackToCart = () => {
    dispatch(closeCheckout())
    dispatch(openCart())
  }

  const getErrorMessage = (fieldName: string): string => {
    const error = errors[fieldName]
    if (touched[fieldName] && typeof error === 'string') {
      return error
    }
    return ''
  }

  const continueToPayment = async () => {
    const deliveryFields = [
      'receiver',
      'descriprion',
      'city',
      'zipCode',
      'number'
    ]

    const allErrors = await validateForm()
    const hasDeliveryError = deliveryFields.some((field) => allErrors[field])

    if (hasDeliveryError) {
      const touchedFields: { [key: string]: boolean } = {}
      deliveryFields.forEach((field) => {
        touchedFields[field] = true
      })
      setTouched(touchedFields)
    } else {
      dispatch(closeCheckout())
      dispatch(openPayment())
    }
  }

  return (
    <>
      <CheckoutContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={() => dispatch(closeCheckout())} />
        <Sidebar>
          <h3>Entrega</h3>
          <ul>
            <InputLine>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                id="receiver"
                type="text"
                name="receiver"
                value={values.receiver}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <small>{getErrorMessage('receiver')}</small>
            </InputLine>
            <InputLine>
              <label htmlFor="description">Endereço</label>
              <input
                id="description"
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <small>{getErrorMessage('description')}</small>
            </InputLine>
            <InputLine>
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                type="text"
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <small>{getErrorMessage('city')}</small>
            </InputLine>
            <Row>
              <InputLine>
                <label htmlFor="zipCode">CEP</label>
                <input
                  id="zipCode"
                  type="text"
                  name="zipCode"
                  value={values.zipCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <small>{getErrorMessage('zipCode')}</small>
              </InputLine>
              <InputLine>
                <label htmlFor="number">Número</label>
                <input
                  id="number"
                  type="text"
                  name="number"
                  value={values.number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <small>{getErrorMessage('number')}</small>
              </InputLine>
            </Row>
            <InputLine>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                id="complement"
                type="text"
                name="complement"
                value={values.complement}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <small>{getErrorMessage('complement')}</small>
            </InputLine>
          </ul>
          <Button
            className="btn-button"
            type="button"
            onClick={continueToPayment}
          >
            Continuar com o pagamento
          </Button>
          <Button type="button" onClick={handleBackToCart}>
            Voltar para o carrinho
          </Button>
        </Sidebar>
      </CheckoutContainer>
    </>
  )
}

export default CheckoutForm
