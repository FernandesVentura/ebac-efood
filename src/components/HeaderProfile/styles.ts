import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

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

    @media (max-width: ${breakpoints.tablet}) {
      display: block;
      margin: 0 auto;
      text-align: center;
      padding-top: 16px;
    }
  }
`

export const Text = styled.p`
  color: ${colors.secondaryColor};
  font-size: 18px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 24px;
  }
`

export const CartButton = styled.p`
  color: ${colors.secondaryColor};
  font-size: 18px;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 24px;
  }
`

export const Logo = styled.img`
  width: 128px;

  @media (max-width: ${breakpoints.tablet}) {
    width: 120px;
  }
`
