import React from 'react'
import {Header, SubHeader} from './style'

interface BTProps {
    text: string;
    subHeader?: boolean;
}

const BannerTypography: React.FC<BTProps> = ({text, subHeader, children}) => {
    return (
        <>
        {
            subHeader ? (
                <SubHeader>
                    {text}
                    {children}
                </SubHeader>
            ) : (
                <Header>
                    {text}
                    {children}
                </Header>
            )
        }
        </>
    )
}

export default BannerTypography