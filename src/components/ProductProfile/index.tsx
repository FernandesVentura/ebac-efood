import { Card, Title, Description, AddButton } from "./styles"

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
            <AddButton>{cart}</AddButton>
        </div>

    </Card>
)

export default ProductProfile