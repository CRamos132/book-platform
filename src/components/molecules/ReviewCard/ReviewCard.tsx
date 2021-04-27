import React from 'react';
import ReviewContent from '../../atoms/ReviewContent/ReviewContent';
import ReviewWrapper from '../../atoms/ReviewWrapper/ReviewWrapper';

const ReviewCard: React.FC = () => (
  <ReviewWrapper>
    <img src="./images/review.jpg" alt="Man holding book" />
    <ReviewContent />
  </ReviewWrapper>
);

export default ReviewCard;
