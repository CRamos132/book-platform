import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: auto;
    font-size: 0.6em;
    color: white;
    img {
        height: 16px;
        width: 16px;
        margin-right: 2px;
    }
    b {
        font-weight: 700;
    }
    span {
        margin-left: 4px;
        font-weight: 400;
    }
`

const ReadNow: React.FC = () => {
    return (
        <Text>
            <img src='./images/graphic.svg' alt='Graphic' />
            <strong>
                +120 
            </strong>
            <span>
                Read Now
            </span>
        </Text>
    )
}

export default ReadNow