import React from 'react';
import ReviewContent from '../../atoms/ReviewContent/ReviewContent';
import ReviewWrapper from '../../atoms/ReviewWrapper/ReviewWrapper';
import WrapperButton from '../../atoms/WrapperButton/WrapperButton';

const ReviewCard: React.FC = () => (
  <WrapperButton>
    <ReviewWrapper>
      <img src="./images/review.jpg" alt="Man holding book" />
      <ReviewContent />
    </ReviewWrapper>
  </WrapperButton>
);

export default ReviewCard;
