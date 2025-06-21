import styled from "styled-components";
import { colors } from "../../styles";

import { Props } from ".";

export const TagContainer = styled.button<Props>`
    background-color: ${colors.secondaryColor};
    color: ${colors.mainColor};
    font-size: 12px;
    font-weight: bold;
    padding: 4px 6px;
    display: inline-block;
    margin-left: 8px;
    border: none;
    cursor: pointer;
`