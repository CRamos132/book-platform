import React from 'react'
import {Icon, IconWrapper, Label} from './style'

interface NavIconsProps {
    src: string;
    path: string;
    active?: string;
}

const NavIcon: React.FC<NavIconsProps> = ({src, path, active}) => {
    const isActive = active === path
    return (
        <IconWrapper to='/' active={isActive}>
            <Icon src={src} alt={`Path to ${path}`} active={isActive} />
            <Label active={isActive}>{path}</Label>
        </IconWrapper>
    )
}

export default NavIcon