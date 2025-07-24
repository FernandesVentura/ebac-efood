import styled from "styled-components"
import { breakpoints, colors } from "../../styles"

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
`

export const Modal = styled.div`
    top: 0;
    left: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    justify-content: center;

    &.visible {
        display: flex;
    }
`


export const ModalContent = styled.div`
background-color: ${colors.secondaryColor};
    color: ${colors.mainColor};
    display: flex;
    position: relative;
    z-index: 1;

    .container {
    max-width: 1024px;
    }

    > img {
        width: 280px;
        height: 280px;
        margin: 32px;
        object-fit: cover;    
        display: block;
    }

    @media (max-width: ${breakpoints.tablet}) {
        display: block;
        width: 80%;

        >img {
            width: 100%;
            max-height: 200px;
            margin: 0px;
        }
    }
`

export const ModalInfo = styled.div`
    font-size: 14px; 


    .title-close {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
        margin-right: 8px;
    }

    h4 {
        font-size: 18px;
        font-weight: 900;
        margin-top: 24px;
        margin-bottom: 16px;
    }

    img {
        width: 16px;
        height: 16px;
    }

    p {
        margin-bottom: 16px;
        margin-right: 24px;
        line-height: 22px;
    }

    @media (max-width: ${breakpoints.desktop}) {
        margin-left: 16px;
        position: relative;
    }

    @media (max-width: ${breakpoints.tablet}) {
        margin-left: 16px;
        position: relative;

        h4 {
            margin-top: 0;
        }

        p {
            font-size: 14px;
        }
    }
`

export const AddButton = styled.button`
    background-color: ${colors.footerColor};
    color: ${colors.secondaryColor};
    padding: 4px;
    border: none;
    font-weight: bold;
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
        margin-bottom: 16px;
    }
`