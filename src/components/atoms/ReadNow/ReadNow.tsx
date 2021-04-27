import React from 'react'
import styled from 'styled-components'

interface TextProps {
    regularColor?: string;
    highlightColor?: string;
}

const Text = styled.div<TextProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: auto;
    font-size: 0.6em;
    /* color: white; */
    img {
        height: 16px;
        width: 16px;
        margin-right: 2px;
    }
    strong {
        font-weight: 700;
        color: ${props => props.highlightColor};
        margin: 0 4px;
    }
    span {
        
        font-weight: 400;
        color: ${props => props.regularColor};
    }
`

interface ReadNowProps extends TextProps {
    src: string;
}

const ReadNow: React.FC<ReadNowProps> = ({regularColor = 'white', highlightColor = 'white', src, children}) => {
    // './images/graphic.svg'
    return (
        <Text regularColor={regularColor} highlightColor={highlightColor}>
            <img src={src} alt='Graphic' />
            {children}
        </Text>
    )
}

export default ReadNow