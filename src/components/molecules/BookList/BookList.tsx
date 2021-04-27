import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';
import VerticalWrapper from '../../atoms/VerticalWrapper/VerticalWrapper';
import BookCard from '../../organisms/BookCard/BookCard';

interface BookListProps {
    books: Book[];
    status: 'waiting' | 'complete' | 'error' | 'empty';
    loadMore: (start: string) => void;
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

const BookList: React.FC<BookListProps> = ({ books, status, loadMore }) => {
  const [count, setCount] = useState(0);
  const handleLoad = (): void => {
    const newCount = count + 12;
    loadMore(String(newCount));
    setCount(newCount);
    // reset the count when you restart the query
  };
  return (
    <VerticalWrapper>
      {status === 'complete' && books.length > 0
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
      {status === 'complete' && <Button onClick={handleLoad}>Load more</Button>}
      {status === 'waiting' && <span>Loading</span>}
      {status === 'empty' && <span>No books were found</span>}
    </VerticalWrapper>
  );
};

export default BookList;
