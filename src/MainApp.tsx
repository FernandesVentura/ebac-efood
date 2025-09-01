// MainApp.tsx
import { useEffect } from 'react'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useFormik, FormikProvider } from 'formik'
import * as Yup from 'yup'

import { RootState } from './store'
import { GlobalCss } from './styles'
import Rotas from './routes'

import Cart from './components/Cart'
import CheckoutForm from './components/CheckoutForm'
import Payment from './components/Payment'
import Receipt from './components/Receipt'

import { close as closePayment } from './store/reducers/payment'
import { open as openReceipt } from './store/reducers/receipt'
import { usePurchaseMutation } from './services/api'
import { clear } from './store/reducers/cart'

function MainApp() {
  const [purchase, { data: purchaseResult, isSuccess, isLoading }] =
    usePurchaseMutation()
  const dispatch = useDispatch()
  const items = useSelector((state: RootState) => state.cart.items)

  const { isOpen: isCheckoutOpen } = useSelector(
    (state: RootState) => state.checkout
  )
  const { isOpen: isPaymentOpen } = useSelector(
    (state: RootState) => state.payment
  )
  const { isOpen: isReceiptOpen } = useSelector(
    (state: RootState) => state.receipt
  )

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },

    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string()
        .required('O campo é obrigatório')
        .min(9, 'Insira um CEP válido'),
      number: Yup.string()
        .typeError('O número precisa ser válido')
        .required('O campo é obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .required('O campo é obrigatório')
        .min(19, 'Insira um número de cartão válido'),
      cvv: Yup.string()
        .length(3, 'Código de segurança inválido')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .typeError('Mês inválido')
        .required('O campo é obrigatório')
        .min(2, 'Insira um mês válido'),
      expiresYear: Yup.string()
        .typeError('Ano inválido')
        .required('O campo é obrigatório')
        .min(4, 'Insira um ano válido')
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  useEffect(() => {
    if (isSuccess && purchaseResult) {
      dispatch(closePayment())
      dispatch(openReceipt(purchaseResult.orderId))
      dispatch(clear())
    }
  }, [isSuccess, purchaseResult, dispatch])

  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
      <FormikProvider value={form}>
        <Cart />
        <form onSubmit={form.handleSubmit}>
          {isCheckoutOpen && <CheckoutForm />}
          {isPaymentOpen && <Payment />}
        </form>
        {isReceiptOpen && <Receipt />}
      </FormikProvider>
    </BrowserRouter>
  )
}

export default MainApp
