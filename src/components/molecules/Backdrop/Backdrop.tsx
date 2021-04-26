import React from 'react'
import FixedTop from '../../atoms/FixedTop/FixedTop'
import ImageWrapper from './style'

const Backdrop: React.FC = () => {
    return (
        <FixedTop>
            <ImageWrapper>
                <img 
                    className="top-left"
                    src='./images/linedCircle.svg' 
                    alt='backdrop circle' 
                />
                <img 
                    className="bottom-mid"
                    src='./images/linedCircle.svg' 
                    alt='backdrop circle' 
                />
                <img 
                    className="left-blue"
                    src='./images/blueCircle.svg' 
                    alt='backdrop circle' 
                />
                <img 
                    className="left-pink"
                    src='./images/pinkCircle.svg' 
                    alt='backdrop circle' 
                />
                <img 
                    className="top-corner"
                    src='./images/emptyCircle.svg' 
                    alt='backdrop circle' 
                />
            </ImageWrapper>
        </FixedTop>
    )
}

export default Backdrop