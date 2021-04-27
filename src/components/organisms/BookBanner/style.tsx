import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    .top-right {
        position: absolute;
        z-index: 0;
        top: -10px;
        left: -10px;
        height:120px;
        width: 120px;
    }
    .triangle {
        position: absolute;
        z-index: 1;
        right: 70px;
        top: 4px;
        height: 28px;
        width: 33px;
    }
    .circle {
        position: absolute;
        left: 144px;
        top: 14px;
        height: 18px;
        width: 18px;
    }
    .line {
        position: absolute;
        right: 82.2px;
        top: 95.5px;
        height: 18px;
        width: 36px;
        z-index: 99;
    }
`;

interface WrapperProps {
    type: string;
  }

const ImageWrapper: React.FC<WrapperProps> = ({ type }) => (
  <>
    {type === '1' ? (
      <Wrapper>
        <img
          className="circle"
          src="./images/emptyCircle.svg"
          alt="Background circle"
        />
        <img
          className="triangle"
          src="./images/triangle.svg"
          alt="Background circle"
        />
        <img
          className="line"
          src="./images/pinkLine.svg"
          alt="Background circle"
        />
      </Wrapper>
    ) : (
      <Wrapper style={{ zIndex: -1 }}>
        <img
          className="top-right"
          src="./images/linedCircle.svg"
          alt="Background circle"
        />
      </Wrapper>
    )}
  </>
);

export default ImageWrapper;
