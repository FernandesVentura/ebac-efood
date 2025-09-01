import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useFormikContext } from 'formik'
import { IMaskInput } from 'react-imask'

import { CheckoutContainer, InputLine, Overlay, Sidebar, Row } from './styles'

import { Details as Button } from '../ProductProfile/styles'

import { RootState } from '../../store'
import { open as openPayment } from '../../store/reducers/payment'
import { close as closeCheckout } from '../../store/reducers/checkout'
import { open as openCart } from '../../store/reducers/cart'

const CheckoutForm = () => {
  const { isOpen } = useSelector((state: RootState) => state.checkout)
  const { items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const {
    values,
    handleChange,
    handleBlur,
    touched,
    errors,
    validateForm,
    setTouched,
    setFieldTouched,
    validateField
  } = useFormikContext<any>()

  const handleBackToCart = () => {
    dispatch(closeCheckout())
    dispatch(openCart())
  }

  const getInputError = (fieldName: string) => {
    const error = errors[fieldName]
    if (touched[fieldName] && typeof error === 'string') {
      return error
    }
    return ''
  }

  const handleRealTimeChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target

    handleChange(e)
    setFieldTouched(name, true, false)
    setTimeout(() => {
      validateField(name)
    }, 0)
  }

  const handleIMaskChange = (fieldName: string) => (value: string) => {
    const syntheticEvent = {
      target: {
        name: fieldName,
        value: value
      }
    } as React.ChangeEvent<HTMLInputElement>

    handleRealTimeChange(syntheticEvent)
  }

  const continueToPayment = async () => {
    const deliveryFields = [
      'receiver',
      'description',
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

  if (items.length === 0) {
    return <Navigate to="/" />
  }
  return (
    <>
      <CheckoutContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={() => dispatch(closeCheckout())} />
        <Sidebar>
          <h3>Entrega</h3>
          <ul>
            <InputLine>
              <label htmlFor="receiver">Quem irá receber (*)</label>
              <input
                id="receiver"
                type="text"
                name="receiver"
                value={values.receiver}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputError('receiver') ? 'input-error' : ''}
              />
            </InputLine>
            <InputLine>
              <label htmlFor="description">
                Endereço <span>(*)</span>
              </label>
              <input
                id="description"
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputError('description') ? 'input-error' : ''}
              />
            </InputLine>
            <InputLine>
              <label htmlFor="city">
                Cidade <span>(*)</span>
              </label>
              <input
                id="city"
                type="text"
                name="city"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputError('city') ? 'input-error' : ''}
              />
            </InputLine>
            <Row>
              <InputLine>
                <label htmlFor="zipCode">
                  CEP <span>(*)</span>
                </label>
                <IMaskInput
                  id="zipCode"
                  type="text"
                  name="zipCode"
                  value={values.zipCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputError('zipCode') ? 'input-error' : ''}
                  mask="00000-000"
                />
              </InputLine>
              <InputLine>
                <label htmlFor="number">
                  Número <span>(*)</span>
                </label>
                <IMaskInput
                  id="number"
                  type="text"
                  name="number"
                  value={values.number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputError('number') ? 'input-error' : ''}
                />
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
                className={getInputError('complement') ? 'input-error' : ''}
              />
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
function validateField(name: string) {
  throw new Error('Function not implemented.')
}
