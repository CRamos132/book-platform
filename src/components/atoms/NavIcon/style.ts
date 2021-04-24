import styled from 'styled-components'
import {Link} from 'react-router-dom'

interface IconProps {
    active: "active" | "inactive";
}

const IconWrapper = styled(Link)<IconProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
    opacity: ${props => props.active === 'active' ? 1 : .5};
    text-decoration:none;
`

const Icon = styled.img<IconProps>`
    height: 18px;
    width: auto;
    margin-bottom: 10px;
`

const Label = styled.label<IconProps>`
    font-size: 10px;
    text-decoration:none;
    text-transform: capitalize;
`

export {Icon, IconWrapper, Label}