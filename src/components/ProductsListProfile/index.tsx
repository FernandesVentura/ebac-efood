import ProductProfile from "../ProductProfile"
import { Container, List } from "./styles"
import { useState } from "react"
import ModalProfile from "../ModalProfile"
import { Prato } from "../../pages/Home"


export type Props = {
    menusProfile: Prato[]
}

const ProductsListProfile = ({ menusProfile }: Props) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null)


    return (
        <>
            <Container>
                <div className="container">
                    <List>
                        {menusProfile.map((item) => (
                            <ProductProfile 
                                key={item.id}
                                nome={item.nome}               
                                descricao={item.descricao}
                                foto={item.foto}                 
                                onClick={() => {
                                    setModalOpen(true)
                                    setPratoSelecionado(item)
                                }}
                            />
                        ))}
                    </List>
                </div>
            </Container>
            <ModalProfile 
                modalOpen={modalOpen}
                pratoSelecionado={pratoSelecionado}
                onClose={() => {
                    setModalOpen(false)
                    setPratoSelecionado(null)
                }}
            />
        </>
    )
}

export default ProductsListProfile
