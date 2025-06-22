// import { Link } from "react-router-dom"
import { TagContainer } from "./styles"

export type Props = {
    children: string
}

const TagInfo = ({children}: Props) => (
    <div >
        <TagContainer>
            {children}
        </TagContainer>
    </div>
)

export default TagInfo