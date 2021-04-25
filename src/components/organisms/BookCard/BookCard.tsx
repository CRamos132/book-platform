import React from 'react'
import BookCoverSm from '../../atoms/BookCoverSm/BookCoverSm'
import {CardWrapper, Title, Author} from './style'

interface BookCardProps {
    title: string;
    id: string;
    thumbnail: string;
    authors?: string[];
}

const BookCard: React.FC<BookCardProps> = ({title, id, thumbnail, authors}) => {
    return (
        <CardWrapper>
            <BookCoverSm
                src={thumbnail} 
                alt={`${title} book cover`}
            />
            <Title>{title}</Title>
            <Author>
                By {` `}
                {authors?.map((author, index) => {
                    return index === authors.length - 1 ? `${author}` : `${author}, `
                })}
            </Author>
        </CardWrapper>
    )
}

export default BookCard