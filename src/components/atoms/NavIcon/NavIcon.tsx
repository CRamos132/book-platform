import React from 'react'
import {Icon, IconWrapper, Label} from './style'

interface NavIconsProps {
    src: string;
    path: string;
    active?: string;
}

const NavIcon: React.FC<NavIconsProps> = ({src, path, active}) => {
    return (
        <IconWrapper to='/' active={active === path}>
            <Icon src={src} alt={`Path to ${path}`} active={active === path} />
            <Label active={active === path}>{path}</Label>
        </IconWrapper>
    )
}

export default NavIcon