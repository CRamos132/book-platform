import React from 'react'
import ReadingTypography from '../../atoms/ReadingTypography/ReadingTypography'
import ReadingWrapper from '../../atoms/ReadingWrapper/ReadingWrapper'
import styled from 'styled-components'

const Background = styled.div`
    z-index: -1;
    position: absolute;
    left: -8%;
    background-color: #EEF5DB;
    height: 100px;
    width: 100%;
`

const CurrentCard: React.FC = () => {
    return (
        <ReadingWrapper>
            <Background />
            <img 
                className='book-cover'
                src='https://via.placeholder.com/100x153' 
                alt='Book cover' 
            />
            <div className='content'>
                <div>
                    <ReadingTypography text='Originals' />
                    <ReadingTypography text='by Adam Grant' subHeader={true}/>
                </div>
            </div>
        </ReadingWrapper>
    )
}

export default CurrentCard