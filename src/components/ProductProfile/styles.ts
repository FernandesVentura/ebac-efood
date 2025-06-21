import styled from "styled-components";
import { colors } from "../../styles";

export const Card = styled.div`
    background-color: ${colors.secondaryColor};
    font-size: 14px;
    max-width: 320px;
    width: 100%;
    margin-bottom: 48px;
    position: relative;

    img{
        max-width: 304px; 
        margin: 8px;
    }

    .card-div{
        margin: 8px;
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

export const AddButton = styled.button`
    background color: ${colors.mainColor};
    color: ${colors.secondaryColor};
    padding: 4px;
    width: 100%;
    border: none;
    font-weight: bold;
    cursor: pointer;

`