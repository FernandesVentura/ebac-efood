import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const ReceiptContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  color: ${colors.mainColor};

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  background-color: ${colors.secondaryColor};
  z-index: 1;
  padding: 32px 8px 0 8px;

  h3 {
    margin-bottom: 16px;
    font-size: 16px;
    font-wight: 700;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
  }
`

export const Row = styled.div`
  font-size: 14px;
  line-height: 22px;
`
