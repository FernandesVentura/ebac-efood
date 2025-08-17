import { ReactNode } from 'react'
import { TagContainer } from './styles'

export type Props = {
  children: ReactNode
}

const TagInfo = ({ children }: Props) => (
  <div>
    <TagContainer>{children}</TagContainer>
  </div>
)

export default TagInfo
