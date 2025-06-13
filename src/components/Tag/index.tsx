import { Link } from "react-router-dom"
import { TagContainer } from "./styles"

export type Props = {
    children: string
}

const Tag = ({children}: Props) => (
    <Link to='/page1'>
        <TagContainer>
            {children}
        </TagContainer>
    </Link>
)

export default Tag