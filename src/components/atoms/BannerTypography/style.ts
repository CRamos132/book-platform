import styled from 'styled-components'

const Header = styled.h3`
    font-family: PlayfairDisplay, serif;
    color: ${props => props.color};
    font-size: 1.5em;
`

const SubHeader = styled.h4`
    color: ${props => props.color};
    margin-top: 5px;
    font-size: 0.8em;
    font-style: italic;
    font-weight: normal;
`

export {Header, SubHeader}