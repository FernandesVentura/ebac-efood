import styled from 'styled-components'
import { Props } from '.'

export const Container = styled.section<Omit<Props, 'menusProfile'  >>`
    margin-top: 56px;
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    margin-bottom: 32px;
`