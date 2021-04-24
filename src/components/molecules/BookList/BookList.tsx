import React from 'react'
import BookCoverSm from '../../atoms/BookCoverSm/BookCoverSm'
import VerticalWrapper from '../../atoms/VerticalWrapper/VerticalWrapper'

interface BookListProps {
    books: any[];
}

interface Book {
    volumeInfo: {
        authors: string[];
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        };
        title: string;
    }
}

const BookList: React.FC<BookListProps> = ({books}) => {
    return (
        <VerticalWrapper>
            {books && books.length > 0 && books?.map((book: Book, index) => {
                return (
                    <BookCoverSm 
                        key={`book_cover_${index}`}
                        src={book?.volumeInfo?.imageLinks?.smallThumbnail || 'https://via.placeholder.com/100x153'} 
                        alt='Cover for book' 
                    />
                )
            })}
        </VerticalWrapper>
    )
}

export default BookList