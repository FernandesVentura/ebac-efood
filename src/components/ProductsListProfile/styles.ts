import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section`
    margin-top: 56px;
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    margin-bottom: 32px;

    
    @media (max-width: ${breakpoints.desktop}) {
        grid-template-columns: 1fr 1fr;
    }
    
    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`
