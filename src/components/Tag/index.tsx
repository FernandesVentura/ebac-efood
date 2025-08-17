import { TagContainer } from './styles'
import { ReactNode } from 'react'

export type Props = {
  children: ReactNode
  to: string
  backgroundColor?: string
}

const Tag = ({ children, to, backgroundColor }: Props) => (
  <TagContainer to={to} $bg={backgroundColor}>
    {children}
  </TagContainer>
)

export default Tag
