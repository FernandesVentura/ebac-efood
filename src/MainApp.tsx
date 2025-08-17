// MainApp.tsx
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './routes'
import Cart from './components/Cart'
import CheckoutForm from './components/CheckoutForm'
import Payment from './components/Payment'
import Receipt from './components/Receipt'
import { useFormik, FormikProvider } from 'formik'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from './store'
import { close as closePayment } from './store/reducers/payment'
import { open as openReceipt } from './store/reducers/receipt'
import * as Yup from 'yup'
import { usePurchaseMutation } from './services/api'

function MainApp() {
  const [purchase, { data: purchaseResult, isSuccess }] = usePurchaseMutation()
  const dispatch = useDispatch()

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
      zipCode: Yup.string().required('O campo é obrigatório'),
      number: Yup.number()
        .typeError('O número precisa ser válido')
        .required('O campo é obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cvv: Yup.string()
        .length(3, 'Código de segurança inválido')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.number()
        .typeError('Mês inválido')
        .required('O campo é obrigatório'),
      expiresYear: Yup.number()
        .typeError('Ano inválido')
        .required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        products: [{ id: 1, price: 100 }],
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
