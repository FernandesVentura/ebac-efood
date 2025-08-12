import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './routes' 
import { store } from './store'
import Cart from './components/Cart'
import CheckoutForm from './components/CheckoutForm'
import Payment from './components/Payment'
import Receipt from './components/Receipt'
import { useFormik, FormikProvider } from 'formik'
import * as Yup from 'yup'

function App() {
  const form = useFormik({
    initialValues: {
      deliveryName: '',
      address: '',
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
      deliveryName: Yup.string().min(5, 'O nome precisa ter pelo menos 5 caracteres').required('O campo é obrigatório'),
      address: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string().required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string().required('O campo é obrigatório'),
      cardName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cvv: Yup.string().length(3, 'Código de segurança inválido').required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <FormikProvider value={form}>
          <Cart />
          <CheckoutForm />
          <Payment />
          <Receipt />
        </FormikProvider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
