import { Card, Title, Description, ButtonAdd } from "./styles"

type Props = {
    title: string;
    description: string;
    image: string;
    cart: string
}

const ProductProfile = ({ 
    title, 
    description,
    image, 
    cart
}: Props) => (
    <Card>
        <img src={image} alt={title} />
        <div className="card-div">
            <Title>{title}</Title>
            <Description>{description}</Description>
            <ButtonAdd>{cart}</ButtonAdd>
        </div>

    </Card>
)

export default ProductProfile