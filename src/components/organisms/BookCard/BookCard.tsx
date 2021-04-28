import React from 'react';
import { useHistory } from 'react-router-dom';
import BookCoverSm from '../../atoms/BookCoverSm/BookCoverSm';
import Title from '../../atoms/Title/Title';
import Subtitle from '../../atoms/Subtitle/Subtitle';
import CardWrapper from '../../atoms/CardWrapper/CardWrapper';

interface BookCardProps {
    title: string;
    id: string;
    thumbnail: string;
    authors?: string[];
}

const BookCard: React.FC<BookCardProps> = ({
  title, id, thumbnail, authors,
}) => {
  const history = useHistory();
  const handleRedirect = (): void => {
    history.push(`/book?id=${id}`);
  };
  return (
    <CardWrapper id={id}>
      <BookCoverSm
        src={thumbnail}
        alt={`${title} book cover`}
        onClick={handleRedirect}
      />
      <Title>{title}</Title>
      <Subtitle>
        By
        {' '}
        {' '}
        {authors?.map((author, index) => (
          index === authors.length - 1 ? `${author}` : `${author}, `
        ))}
      </Subtitle>
    </CardWrapper>
  );
};

export default BookCard;
