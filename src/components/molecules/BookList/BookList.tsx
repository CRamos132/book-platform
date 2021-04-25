import React, {useState} from 'react'
import BookCoverSm from '../../atoms/BookCoverSm/BookCoverSm'
import VerticalWrapper from '../../atoms/VerticalWrapper/VerticalWrapper'

interface BookListProps {
    books: any[];
    status: 'waiting' | 'complete' | 'error' | 'empty';
    loadMore: (start: string) => void;
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

const BookList: React.FC<BookListProps> = ({books, status, loadMore}) => {
    const [count, setCount] = useState(0)
    const handleLoad = () => {
        const newCount = count + 12
        loadMore(String(newCount))
        setCount(newCount)
        //reset the count when you restart the query
    }
    return (
        <VerticalWrapper>
            {status === 'complete' && books.length > 0 && books?.map((book: Book, index) => {
                return (
                    <BookCoverSm 
                        key={`book_cover_${index}`}
                        src={book?.volumeInfo?.imageLinks?.smallThumbnail || 'https://via.placeholder.com/100x153'} 
                        alt='Cover for book' 
                    />
                )
            })}
            {status === 'complete' && <button onClick={handleLoad}>Load more</button>}
            {status === 'waiting' && <span>Loading</span>}
            {status === 'empty' && <span>No books were found</span>}
        </VerticalWrapper>
    )
}

export default BookList