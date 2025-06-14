import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  

  .container {
    display: flex;
    font-weight: bold;
    justify-content: space-between;
    padding-top: 64px;
    align-items: center;
    width: 100%;
  }
`


export const Text = styled.h2`
  color: ${colors.secondaryColor};
  font-size: 18px;

`

export const Logo = styled.img`
  width: 128px;
`
