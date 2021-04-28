import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/atoms/Button/Button';

const Wrapper = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        margin: 10vh 0;
        width: 100%;
        text-align: center;
    }
    .btn-wrapper {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        & > * {
            margin: 10px;
        }
    }
`;

const NotFound: React.FC = () => {
  const history = useHistory();
  const handleBack = (previous?: boolean): void => {
    if (previous) {
      history.goBack();
    } else {
      history.push('/');
    }
  };
  return (
    <Wrapper>
      <h1>Page under construction</h1>
      <div className="btn-wrapper">
        <Button onClick={() => { handleBack(); }}>Go to home</Button>
        <Button onClick={() => { handleBack(true); }}>Previous page</Button>
      </div>
    </Wrapper>
  );
};

export default NotFound;
