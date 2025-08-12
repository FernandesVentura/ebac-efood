import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { open as openPayment } from '../../store/reducers/payment'
import { close as closeCheckout } from '../../store/reducers/checkout'
import { open as openCart } from '../../store/reducers/cart'
import { CheckoutContainer, InputLine, Overlay, Sidebar, Row } from "./styles"
import { Details as Button } from "../ProductProfile/styles"
import { useFormikContext } from "formik"



const CheckoutForm = () => {
    const { isOpen } = useSelector((state:RootReducer) => state.checkout)
    const dispatch = useDispatch()

    const { values, handleChange, handleBlur, handleSubmit, touched, errors } = useFormikContext<any>()

    const handleBackToCart = () => {
        dispatch (closeCheckout())
        dispatch(openCart())
    }

    const handleContinueToPayment = () => {
        dispatch (closeCheckout())
        dispatch (openPayment())
    }

    const getErrorMessage = (fieldName: string): string => {
        const error = errors[fieldName]
        if (touched[fieldName] && typeof error === 'string') {
            return error
        }
        return ''
    }

    

    return (
        <>
            <CheckoutContainer className={isOpen ? 'is-open' : '' }>
                <Overlay onClick={() => dispatch(closeCheckout())}/>
                <Sidebar>
                    <form onSubmit={handleSubmit}>
                        <h3>Entrega</h3>
                        <ul>
                            <InputLine>
                                <label htmlFor="deliveryName">Quem irá receber</label>
                                <input id="deliveryName" type="text" name="deliveryName" value={values.deliveryName} onChange={handleChange} onBlur={handleBlur}/>
                                <small>{getErrorMessage('deliveryName')}</small>
                            </InputLine>
                            <InputLine>
                                <label htmlFor="address">Endereço</label>
                                <input id="address" type="text" name="address" value={values.address} onChange={handleChange} onBlur={handleBlur}/>
                                <small>{getErrorMessage('address')}</small>
                            </InputLine>
                            <InputLine>
                                <label htmlFor="city">Cidade</label>
                                <input id="city" type="text" name="city" value={values.city} onChange={handleChange} onBlur={handleBlur}/>
                                <small>{getErrorMessage('city')}</small>
                            </InputLine>
                            <Row>
                                <InputLine>
                                    <label htmlFor="zipCode">CEP</label>
                                    <input id="zipCode" type="text" name="zipCode" value={values.zipCode} onChange={handleChange} onBlur={handleBlur}/>
                                    <small>{getErrorMessage('zipCode')}</small>
                                </InputLine>
                                <InputLine>
                                    <label htmlFor="number">Número</label>
                                    <input id="number" type="text" name="number" value={values.number} onChange={handleChange} onBlur={handleBlur}/>
                                    <small>{getErrorMessage('number')}</small>
                                </InputLine>
                            </Row>
                            <InputLine>
                                <label htmlFor="complement">Complemento (opcional)</label>
                                <input id="complement" type="text" name="complement" value={values.complement} onChange={handleChange} onBlur={handleBlur}/>
                                <small>{getErrorMessage('complement')}</small>
                            </InputLine>
                        </ul>
                        <Button className="btn-button" onClick={handleContinueToPayment}>Continuar com o pagamento</Button>
                        <Button onClick={handleBackToCart}>Voltar para o carrinho</Button>
                    </form>
                </Sidebar>
            </CheckoutContainer>
        </>
    )
}

export default CheckoutForm