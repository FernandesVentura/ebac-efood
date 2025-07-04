import { Link } from "react-router-dom"
import { TagContainer } from "./styles"
import { ReactNode } from "react"

export type Props = {
    children: ReactNode
    to: string
}

const Tag = ({children, to}: Props) => (
        <TagContainer to={to}>
            {children}
        </TagContainer>
)

export default Tag