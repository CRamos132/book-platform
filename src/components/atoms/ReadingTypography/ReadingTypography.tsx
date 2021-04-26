import React from 'react'
import {Header, SubHeader} from './style'

interface BTProps {
    text: string;
    subHeader?: boolean;
    color?: string;
}

const ReadingTypography: React.FC<BTProps> = ({text, subHeader, children, color = 'black'}) => {
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

export default ReadingTypography