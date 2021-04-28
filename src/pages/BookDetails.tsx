import React, { useEffect, useState } from 'react';
import getUrlParam from '../helpers/getUrlParam';
import BookCoverMd from '../components/atoms/BookCoverMd/BookCoverMd';
import Details from '../components/templates/Details/Details';
import BookText from '../components/molecules/BookText/BookText';
import BackButton from '../components/atoms/BackButton/BackButton';
import FloatMenu from '../components/molecules/FloatMenu/FloatMenu';
import Backdrop from '../components/molecules/Backdrop/Backdrop';
import { Book } from '../types';

const BookDetails: React.FC = () => {
  const [book, setBook] = useState<Book>();
  useEffect(() => {
    const id = getUrlParam('id');
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(async (response) => {
        const data = await response.json();
        setBook(data);
      });
  }, []);
  return (
    <>
      <Backdrop />
      <BackButton />
      {book && (
        <Details
          top={(
            <BookCoverMd
              src={book?.volumeInfo?.imageLinks?.smallThumbnail
                || './images/notavailable.jpg'}
            />
          )}
          center={(
            <BookText
              title={book.volumeInfo.title}
              subtitle={book.volumeInfo.subtitle}
              authors={book.volumeInfo.authors}
              description={book.volumeInfo.description}
            />
          )}
        />
      )}
      <FloatMenu book={book} />
    </>
  );
};

export default BookDetails;
