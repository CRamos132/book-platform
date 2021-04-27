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
    } else {
      history.goBack();
    }
  };

  return (
    <TransparentButton onClick={handleClick}>
      <img src="./images/back.svg" alt="Arrow left" />
    </TransparentButton>
  );
};

export default BackButton;
