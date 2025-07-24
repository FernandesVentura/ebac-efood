import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Card = styled.div`
    background-color: ${colors.white};
    font-size: 14px;
    max-width: 472px;
    width: 100%;
    border: 2px solid ${colors.secondaryColor};
    margin-bottom: 48px;
    position: relative;
    padding-bottom: 24px;

    > img{
        width: 100%;
        height: 217px;
        object-fit: cover;    
        display: block;
    }

    .card-div{
        margin: 8px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        margin: 0 auto 48px;
    }
`

export const TitleDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        display: flex;
        font-weight: bold;
        font-size: 18px;

        span{
            margin-right: 8px;
        }
        
    }
` 

export const Title = styled.h3`
    font-weight: bold;
    font-size: 18px;
    display: block;
    margin-top: 8px;

`

export const Description = styled.p`
    line-height: 22px;
    display: block;
    margin-top: 16px;
    margin-bottom: 16px;
`

export const Infos = styled.div`
    position: absolute;
    display: flex;
    top: 16px;
    right: 16px;
`

