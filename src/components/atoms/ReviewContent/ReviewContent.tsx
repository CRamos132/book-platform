import React from 'react'
import styled from 'styled-components'

const RvwContent = styled.section`
    width: 100%;
    padding: 15px 12px;
    .title {
        font-size: 0.7em;
        color: ${props => props.theme.darkGray};
    }
    .text-content {
        font-size: 0.6em;
        color: ${props => props.theme.darkGray};
        opacity: 0.7;
        margin-top: 6px;
    }
    .fixed-height {
        height: 35px;
    }
`

const ReviewContent: React.FC = () => {
    return (
        <RvwContent>
            <h3 className='title'>Don't Make Me Think - Steve Krug</h3>
            <p className="text-content">
                Jesse Showalter - 5.2K Views - 1 Week ago
            </p>
            <p className="text-content fixed-height">
                "Don't Make Me Think" by Steve Krug is one of the first 
                books I read when I was getting into digital design. It 
                helped me move from designing things that just "look nice"
                 to designing things that are usable, useful, memorable 
                 and simple to learn and use.
            </p>
        </RvwContent>
    )
}

export default ReviewContent