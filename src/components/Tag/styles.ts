import styled from 'styled-components'
import { colors } from '../../styles'

import { Link } from 'react-router-dom'

type Props = {
  $bg?: string
}

export const TagContainer = styled(Link)<Props>`
  background-color: ${({ $bg }) => $bg || colors.footerColor};
  color: ${colors.mainColor};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  position: absolute;
  bottom: 8px;
  left: 8px;
`
