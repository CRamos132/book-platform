import React from 'react';
import Button from '../../atoms/Button/Button';
import VerticalWrapper from '../../atoms/VerticalWrapper/VerticalWrapper';
import BookCard from '../../organisms/BookCard/BookCard';

interface BookListProps {
    books: Book[];
    status: 'waiting' | 'complete' | 'error' | 'empty';
    loadMore: () => void;
}

interface Book {
    id: string;
    volumeInfo: {
        authors: string[];
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        };
        title: string;
    }
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
              || 'https://via.placeholder.com/100x153'
            }
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
        />
      ))}
    {status === 'waiting' && <span>Loading</span>}
    {(status === 'complete' || status === 'waiting') && (
      <Button
        id="load-more"
        disabled={status !== 'complete'}
        onClick={loadMore}
      >
        Load more
      </Button>
    )}
    {status === 'empty' && <span>No books were found</span>}
  </VerticalWrapper>
);

export default BookList;
