import React from 'react'
import {Icon, IconWrapper, Label} from './style'

interface NavIconsProps {
    src: string;
    title: string;
    action?: ()=>void;
}

const FloatIcon: React.FC<NavIconsProps> = ({src, title, action}) => {
    return (
        <IconWrapper>
            <Icon src={src} alt={`Path to ${title}`} />
            <Label>{title}</Label>
        </IconWrapper>
    )
}

export default FloatIcon