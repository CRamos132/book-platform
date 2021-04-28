/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useHistory } from 'react-router-dom';
import getAuthors from '../../../helpers/getAuthors';
import { Book } from '../../../types';
import Banner from '../../atoms/Banner/Banner';
import BannerTypography from '../../atoms/BannerTypography/BannerTypography';
import ReadNow from '../../atoms/ReadNow/ReadNow';
import WrapperButton from '../../atoms/WrapperButton/WrapperButton';
import ImageWrapper from './style';

interface BookBannerProps {
  type: '1' | '2';
  book: Book;
  id: string;
}

const BookBanner: React.FC<BookBannerProps> = ({ type, book, id }) => {
  const history = useHistory();
  const authors = getAuthors(book.volumeInfo.authors);
  const handleClick = (): void => {
    history.push(`/book?id=${book.id}`);
  };
  return (
    <WrapperButton onClick={handleClick} id={id}>
      <Banner
        type={type}
      >
        <ImageWrapper type={type} />
        <div className="wrapper">
          <div className="text-content">
            <BannerTypography text={book.volumeInfo.title} />
            <BannerTypography text={authors} subHeader />
            <ReadNow src="./images/graphic.svg">
              <strong>
                +120
              </strong>
              <span>
                Read Now
              </span>
            </ReadNow>
          </div>
          <img
            src={book?.volumeInfo?.imageLinks?.smallThumbnail
              || './images/notavailable.jpg'}
            alt="Book cover"
          />
        </div>
      </Banner>
    </WrapperButton>
  );
};

export default BookBanner;
