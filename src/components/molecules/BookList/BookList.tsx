import React from 'react';
import { Book } from '../../../types';
import Button from '../../atoms/Button/Button';
import ReadingTypography from '../../atoms/ReadingTypography/ReadingTypography';
import VerticalWrapper from '../../atoms/VerticalWrapper/VerticalWrapper';
import BookCard from '../../organisms/BookCard/BookCard';

interface BookListProps {
    books: Book[];
    status: 'waiting' | 'complete' | 'error' | 'empty';
    loadMore: () => void;
}

const BookList: React.FC<BookListProps> = ({ books, status, loadMore }) => (
  <VerticalWrapper>
    {(status === 'complete' || status === 'waiting') && books.length > 0
      && books?.map((book: Book) => (
        <BookCard
          key={`book_card_${book.id}`}
          id={book.id}
          thumbnail={
              book?.volumeInfo?.imageLinks?.smallThumbnail
              || './images/notavailable.jpg'
            }
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
        />
      ))}
    {status === 'waiting' && <ReadingTypography text="Loading" />}
    {(status === 'complete' || status === 'waiting') && (
      <Button
        id="load-more"
        disabled={status !== 'complete'}
        onClick={loadMore}
      >
        Load more
      </Button>
    )}
    {status === 'empty' && <ReadingTypography text="No books were found" />}
  </VerticalWrapper>
);

export default BookList;
