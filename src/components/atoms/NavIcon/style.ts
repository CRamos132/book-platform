import styled from 'styled-components'
import {Link} from 'react-router-dom'

interface IconProps {
    active?: boolean;
}

const IconWrapper = styled(Link)<IconProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => props.active ? 'black' : '#BFBEBF'};
    text-decoration:none;
`

const Icon = styled.img<IconProps>`
    height: 18px;
    width: auto;
    fill: ${props => props.active ? 'black' : '#BFBEBF'};
    margin-bottom: 10px;
    svg {
        stroke: ${props => props.active ? 'black' : '#BFBEBF'};
    }
`

const Label = styled.label<IconProps>`
    font-size: 10px;
    color: ${props => props.active ? 'black' : '#BFBEBF'};
    text-decoration:none;
    text-transform: capitalize;
    &:visited {
        color: ${props => props.active ? 'black' : '#BFBEBF'};
        text-decoration:none;
    }
`

export {Icon, IconWrapper, Label}