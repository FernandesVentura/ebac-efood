import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.secondaryColor};
  font-size: 14px;
  max-width: 320px;
  width: 100%;
  margin-bottom: 48px;
  position: relative;

  img {
    height: 167px;
    width: 100%;
    padding: 8px;
    object-fit: cover;
  }

  .card-div {
    margin: 8px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    margin: 0 auto 48px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin: 0 auto 48px;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  display: block;
  margin-top: 8px;
  color: ${colors.mainColor};
`

export const Description = styled.p`
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
  color: ${colors.mainColor};
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Details = styled.button`
  background-color: ${colors.footerColor};
  color: ${colors.secondaryColor};
  padding: 4px;
  width: 100%;
  border: none;
  font-weight: bold;
  cursor: pointer;
`
