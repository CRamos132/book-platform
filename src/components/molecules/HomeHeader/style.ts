import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
`

const Title = styled.h3`
    font-size: 1em;
    color: ${props => props.theme.darkGray};
`

const Action = styled(Link)`
    font-size: 0.8em;
    color: ${props => props.theme.blue};
    text-decoration: none;
`

export {HeaderWrapper, Title, Action}