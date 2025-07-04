import styled from "styled-components";
import { colors } from "../../styles";

import { Link } from "react-router-dom";

export const TagContainer = styled(Link)`
    background-color: ${colors.secondaryColor};
    color: ${colors.mainColor};
    font-size: 12px;
    font-weight: bold;
    padding: 4px 6px;
    border: none;
    cursor: pointer;
    text-decoration: none;
`