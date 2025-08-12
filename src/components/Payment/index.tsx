import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"

import { Details as Button } from "../ProductProfile/styles"
import { close as closePayment } from '../../store/reducers/payment'
import { open as openCheckout } from '../../store/reducers/checkout'
import { open as openReceipt } from '../../store/reducers/receipt'
import { InputLine, Overlay, PaymentContainer, Row, Sidebar } from "./styles"

const Payment = () => {
    const { isOpen } = useSelector((state:RootReducer) => state.payment)
    const dispatch = useDispatch()

    const handleBackToCheckout = () => {
        dispatch (closePayment())
        dispatch (openCheckout())
    }
    
    const handleFinishPayment = () => {
        dispatch (closePayment())
        dispatch (openReceipt())
    }

    return (
        <>
            <PaymentContainer className={isOpen ? 'is-open' : '' }>
                <Overlay onClick={() => dispatch(closePayment())}/>
                <Sidebar>
                    <h3>Pagamento - Valor a pagar </h3>
                    <ul>
                        <InputLine>
                            <label htmlFor="deliveryName">Nome no cartão</label>
                            <input id="deliveryName" type="text" />
                        </InputLine>
                        <Row>
                            <InputLine>
                                <label htmlFor="cardNumber">Número do cartao</label>
                                <input id="cardNumber" type="text" />
                            </InputLine>
                            <InputLine>
                                <label htmlFor="cvv">CVV</label>
                                <input id="cvv" type="text" />
                            </InputLine>
                        </Row>
                        <Row>
                            <InputLine>
                                <label htmlFor="expiresMonth">Mês de vencimento</label>
                                <input id="expiresMonth" type="text" />
                            </InputLine>
                            <InputLine>
                                <label htmlFor="expiresYear">Ano de vencimento</label>
                                <input id="expiresYear" type="text" />
                            </InputLine>
                        </Row>
                    </ul>
                    <Button className="btn-button" onClick={handleFinishPayment}>Finalizar o pagamento</Button>
                    <Button onClick={handleBackToCheckout}>Voltar para a edição de endereço</Button>
                </Sidebar>
            </PaymentContainer>
        </>
    )
}


export default Payment