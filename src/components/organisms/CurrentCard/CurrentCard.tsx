import React from 'react'
import ReadingTypography from '../../atoms/ReadingTypography/ReadingTypography'
import ReadingWrapper from '../../atoms/ReadingWrapper/ReadingWrapper'
import styled from 'styled-components'
import ReadNow from '../../atoms/ReadNow/ReadNow'

const Background = styled.div`
    z-index: -1;
    position: absolute;
    left: -8%;
    background-color: #EEF5DB;
    height: 100px;
    width: 100%;
    overflow: hidden;
    .top-right {
        position: absolute;
        right: -20px;
        top: -20px;
    }
    .top-mid {
        position: absolute;
        right: 90px;
        top: -6px;
        height: 18px;
        width: 18px;
    }
    .bottom-right {
        position: absolute;
        right: -23px;
        bottom: 15px;
    }
`

const CurrentCard: React.FC = () => {
    return (
        <ReadingWrapper>
            <Background>
                <img 
                    className='top-right' 
                    src='./images/linedCircle.svg' 
                    alt='Background circle' 
                />
                <img 
                    className='top-mid' 
                    src='./images/emptyCircle.svg' 
                    alt='Background circle' 
                />
                <img 
                    className='bottom-right' 
                    src='./images/pinkLine.svg' 
                    alt='Background circle' 
                />
            </Background>
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
                <div className="align-bottom">
                    <ReadNow src='./images/bookmark.svg' regularColor='black' highlightColor='#FF6978'>
                        <span>
                            Chapter
                        </span>
                        <strong>
                            2 
                        </strong>
                        <span>
                            From 9
                        </span>
                    </ReadNow>
                </div>
            </div>
        </ReadingWrapper>
    )
}

export default CurrentCard