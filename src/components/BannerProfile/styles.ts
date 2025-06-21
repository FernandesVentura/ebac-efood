import styled from 'styled-components'
import { colors } from '../../styles'

export const Image = styled.div`
    position: relative;
    width: 100%;
    height: 280px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    font-weight: bold;
    z-index: 0;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); // ajuste a opacidade aqui
        z-index: 1;
    }

    .container {
        position: relative;
        z-index: 2;
    }
`
export const Title = styled.h3`
    font-size: 32px;
    font-weight: 100;
    color: ${colors.mainColor};
    padding-top: 24px;
    margin-bottom: 144px;
`
export const Text = styled.p`
    font-size: 32px;
    margin-top: 24px;
    font-weight: bold;
    color: ${colors.mainColor};
  
`