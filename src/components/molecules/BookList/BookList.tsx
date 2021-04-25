import React, {useState} from 'react'
import VerticalWrapper from '../../atoms/VerticalWrapper/VerticalWrapper'
import BookCard from '../../organisms/BookCard/BookCard'

interface BookListProps {
    books: any[];
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
                    <BookCard
                        key={`book_card_${index}`}
                        id={book.id}
                        thumbnail={book?.volumeInfo?.imageLinks?.smallThumbnail || 'https://via.placeholder.com/100x153'}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
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