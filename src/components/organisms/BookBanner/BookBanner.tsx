import React from 'react';
import Banner from '../../atoms/Banner/Banner';
import BannerTypography from '../../atoms/BannerTypography/BannerTypography';
import ReadNow from '../../atoms/ReadNow/ReadNow';
import ImageWrapper from './style';

interface BookBannerProps {
  type: '1' | '2';
}

const BookBanner: React.FC<BookBannerProps> = ({ type }) => (
  <Banner type={type}>
    <ImageWrapper type={type} />
    <div className="wrapper">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <BannerTypography text="Hooked" />
        <BannerTypography text="Nir Eyal" subHeader />
        <ReadNow src="./images/graphic.svg">
          <strong>
            +120
          </strong>
          <span>
            Read Now
          </span>
        </ReadNow>
      </div>
      <img src="https://via.placeholder.com/100x153" alt="Book cover" />
    </div>
  </Banner>
);

export default BookBanner;
