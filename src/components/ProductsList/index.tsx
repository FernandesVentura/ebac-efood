import Product from "../Product"
import { Container, List } from "./styles"

import Menu from "../../models/Menu"

export type Props = {
    menus: Menu[]
}

const ProductsList = ({menus}: Props) => (
    <Container>
        <div className="container">
            <List>
                {menus.map(menu => (
                    <Product
                        key={menu.id}
                        title={menu.title}                            rating={menu.rating}
                        description={menu.description}
                        image={menu.image}
                        infos={menu.infos} 
                        learnMore={menu.learnMore}
                        favorite={menu.favorite} 
                    />
                ))}

        </List>
        </div>
    </Container>
)

export default ProductsList