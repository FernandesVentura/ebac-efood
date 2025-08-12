import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"
import { close, remove } from '../../store/reducers/cart'
import { open as openCheckout } from '../../store/reducers/checkout'
import { Overlay, CartContainer, Sidebar, ListItem, TotalPrice } from './styles'
import { Details as Button } from "../ProductProfile/styles"
import lixeira from '../../assets/images/garbage.png'

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const closeCart = () => dispatch(close())
    const handleRemove = (id: number) => dispatch(remove(id))
    const handleContinueToCheckout = () => {
        dispatch(openCheckout())
        dispatch(close())
    }

    const total = items.reduce((acc, item) => acc + item.preco, 0)

    const formataPreco = (price: number) =>
        new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(price)

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <Sidebar>
                <ul>
                {items.map((item) => (
                    <ListItem key={item.id}>
                        <img className="img" src={item.foto} alt={item.nome} />
                        <div>
                            <h3>{item.nome}</h3>
                            <p>{formataPreco(item.preco)}</p>
                        </div>
                        <img
                            className="remove-button"
                            src={lixeira}
                            alt="Remover"
                            onClick={() => handleRemove(item.id)}
                        />
                    </ListItem>
                ))}
                </ul>
                <TotalPrice>
                    <p>Valor total</p>
                    <p>{formataPreco(total)}</p>
                </TotalPrice>
                <Button type="button" title="Clique para continuar" onClick={handleContinueToCheckout}>
                    Continuar com a entrega
                </Button>
            </Sidebar>
        </CartContainer>
    )
}

export default Cart
