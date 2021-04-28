import React from 'react';
import { useHistory } from 'react-router-dom';
import ReviewContent from '../../atoms/ReviewContent/ReviewContent';
import ReviewWrapper from '../../atoms/ReviewWrapper/ReviewWrapper';
import WrapperButton from '../../atoms/WrapperButton/WrapperButton';

const ReviewCard: React.FC = () => {
  const history = useHistory();
  const handleRedirect = (): void => {
    history.push('/review/1212');
  };
  return (
    <WrapperButton onClick={handleRedirect}>
      <ReviewWrapper>
        <img src="./images/review.jpg" alt="Man holding book" />
        <ReviewContent />
      </ReviewWrapper>
    </WrapperButton>
  );
};

export default ReviewCard;
