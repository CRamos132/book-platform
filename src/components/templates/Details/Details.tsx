import React from 'react';
import { DetailsWrapper } from './style';

interface DetailsProps {
    top: React.ReactElement;
    center: React.ReactElement;
}

const Details: React.FC<DetailsProps> = ({ top, center }) => (
  <DetailsWrapper>
    <div className="top">
      {top}
    </div>
    <div className="center">
      {center}
    </div>
  </DetailsWrapper>
);

export default Details;
