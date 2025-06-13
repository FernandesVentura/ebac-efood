import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  display: block;
  font-weight: bold;
  text-align: center;
`


export const Text = styled.h2`
  color: ${colors.secondaryColor};
  font-size: 36px;

`

export const Logo = styled.img`
  width: 128px;
  padding-top: 64px;
  margin-bottom: 136px;
`
