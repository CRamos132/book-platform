import React from 'react'
import {Header, SubHeader} from './style'

interface BTProps {
    text: string;
    subHeader?: boolean;
    color?: string;
}

const BannerTypography: React.FC<BTProps> = ({text, subHeader, children, color = 'white'}) => {
    return (
        <>
        {
            subHeader ? (
                <SubHeader color={color}>
                    {text}
                    {children}
                </SubHeader>
            ) : (
                <Header color={color}>
                    {text}
                    {children}
                </Header>
            )
        }
        </>
    )
}

export default BannerTypography