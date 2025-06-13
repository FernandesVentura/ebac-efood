import Tag from "../Tag"


import { Card, Title, Description, TitleDiv, Infos } from "./styles"

type Props = {
    title: string;
    rating: string;
    description: string;
    infos: string[];
    image: string;
    learnMore: string;
    favorite: string
}

const Product = ({ 
    title, 
    rating, 
    description, 
    infos, 
    image, 
    learnMore, 
    favorite
}: Props) => (
    <Card>
        <img src={image} alt={title} />
        <div className="card-div">
            <Infos>
                {infos.map((info) => (
                    <Tag key={info}>{info}</Tag>
                ))}
            </Infos>
            <TitleDiv>
                <Title>{title}</Title>
                <div>
                    <span>{rating}</span>
                    <img src={favorite} alt="Icone de favorito" />
                </div>
            </TitleDiv>
            <Description>{description}</Description>
            <Tag>{learnMore}</Tag>
        </div>

    </Card>
)

export default Product