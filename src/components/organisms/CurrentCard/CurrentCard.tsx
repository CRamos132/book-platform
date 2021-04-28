import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import getAuthors from '../../../helpers/getAuthors';
import { Book } from '../../../types';
import ReadingTypography from '../../atoms/ReadingTypography/ReadingTypography';
import ReadingWrapper from '../../atoms/ReadingWrapper/ReadingWrapper';
import ReadNow from '../../atoms/ReadNow/ReadNow';

const Background = styled.div`
    z-index: -1;
    position: absolute;
    left: -8%;
    background-color: #EEF5DB;
    height: 100px;
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
    .top-right {
        position: absolute;
        right: -20px;
        top: -20px;
        height: 69px;
        width: 69px;
    }
    .top-mid {
        position: absolute;
        right: 90px;
        top: -6px;
        height: 18px;
        width: 18px;
    }
    .bottom-right {
        position: absolute;
        right: -23px;
        bottom: 15px;
    }
`;

interface CurrentProps {
  book: Book;
  id: string;
}

const CurrentCard: React.FC<CurrentProps> = ({ book, id }) => {
  const history = useHistory();
  const authors = getAuthors(book.volumeInfo.authors);
  const handleClick = (): void => {
    history.push(`/book?id=${book.id}`);
  };
  return (
    <ReadingWrapper id={id} onKeyDown={handleClick} onClick={handleClick}>
      <Background>
        <img
          className="top-right"
          src="./images/linedCircle.svg"
          alt="Background circle"
        />
        <img
          className="top-mid"
          src="./images/emptyCircle.svg"
          alt="Background circle"
        />
        <img
          className="bottom-right"
          src="./images/pinkLine.svg"
          alt="Background circle"
        />
      </Background>
      <img
        className="book-cover"
        src={
        book.volumeInfo.imageLinks.smallThumbnail
        || './images/notavailable.jpg'
      }
        alt="Book cover"
      />
      <div className="content">
        <div>
          <ReadingTypography text={book.volumeInfo.title} />
          <ReadingTypography text={`by ${authors}`} subHeader />
        </div>
        <div className="align-bottom">
          <ReadNow
            src="./images/bookmark.svg"
            regularColor="black"
            highlightColor="#FF6978"
          >
            <span>
              Chapter
            </span>
            <strong>
              2
            </strong>
            <span>
              From 9
            </span>
          </ReadNow>
        </div>
      </div>
    </ReadingWrapper>
  );
};

export default CurrentCard;
