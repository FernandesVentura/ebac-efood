import ProductProfile from "../ProductProfile"
import { Container, List } from "./styles"

import MenuProfile from "../../models/MenuProfile"

export type Props = {
    menusProfile: MenuProfile[]
}

const ProductsListProfile = ({menusProfile}: Props) => (
    <Container>
        <div className="container">
            <List>
                {menusProfile.map(menus => (
                    <ProductProfile
                        key={menus.id}
                        title={menus.title}
                        description={menus.description}
                        image={menus.image}
                        cart={menus.cart}
                    />
                ))}

        </List>
        </div>
    </Container>
)

export default ProductsListProfile