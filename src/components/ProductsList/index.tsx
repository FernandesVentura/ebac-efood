import { Menu } from "../../pages/Home"
import Product from "../Product"
import { Container, List } from "./styles"

export type Props = {
    menus: Menu[]
}

const ProductsList = ({menus}: Props) => {
    

    const getMenuTags = (menu: Menu) => {
        const tags: string[] = [];

        if (menu.destacado === true) {
            tags.push("Destaque da semana")
        }

        return tags
    }

    return (
        <Container>
            <div className="container">
                <List>
                    {menus.map(menu => (
                        <Product
                            key={menu.id}
                            id={menu.id}
                            titulo={menu.titulo}                            
                            avaliacao={menu.avaliacao}
                            descricao={menu.descricao}
                            capa={menu.capa}
                            tipo={[...getMenuTags(menu), menu.tipo ]}
                        />
                    ))}
            </List>
            </div>
        </Container>
    )
}

export default ProductsList