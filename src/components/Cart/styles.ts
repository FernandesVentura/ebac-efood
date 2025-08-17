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

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  background-color: ${colors.secondaryColor};
  z-index: 1;
  padding: 16px 8px 0 8px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
  }
`

export const ListItem = styled.li`
  background-color: ${colors.footerColor};
  display: flex;
  position: relative;
  padding: 8px;
  margin-top: 16px;

  .img {
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    padding-left: 8px;
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    padding-left: 8px;
    font-size: 14px;
    font-weight: 400;
  }

  .remove-button {
    position: absolute;
    width: 16px;
    height: 16px;
    cursor: pointer;
    bottom: 8px;
    right: 8px;
  }
`

export const TotalPrice = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.mainColor};
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`
