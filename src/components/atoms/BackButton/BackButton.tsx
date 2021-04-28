import React from 'react';
import { useHistory } from 'react-router-dom';
import { TransparentButton } from './style';

interface BackButtonProps {
    onClick?: ()=>void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  const history = useHistory();
  const handleClick = (): void => {
    if (onClick) {
      onClick();
    // checks if the user history is empty
    } else if (history.action !== 'POP') {
      history.goBack();
    } else {
      history.push('/');
    }
  };

  return (
    <TransparentButton id="back-button" onClick={handleClick}>
      <img src="./images/back.svg" alt="Arrow left" />
    </TransparentButton>
  );
};

export default BackButton;
