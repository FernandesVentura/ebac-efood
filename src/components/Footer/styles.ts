import styled from "styled-components";
import { colors } from "../../styles";

export const MainFooter = styled.footer`
    width: 100%;
    background-color: ${colors.footerColor};
    display: block;
    height: 304px;
    text-align: center;

    .logo {
        padding-top: 40px;
        margin-bottom: 32px;

        
    }

    span img{
        cursor: pointer;
    }

    .faceLogo{
        margin: 0 8px;
    }
`

export const Text = styled.p`
    font-size: 10px;
    padding-top: 80px;
`

