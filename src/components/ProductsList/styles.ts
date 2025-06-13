import styled from 'styled-components'
import { Props } from '.'

export const Container = styled.section<Omit<Props, 'menus' >>`
    margin-top: 80px;
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    margin-bottom: 48px;
`