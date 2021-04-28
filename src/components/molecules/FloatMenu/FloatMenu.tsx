import React from 'react';
import { Book } from '../../../types';
import FloatIcon from '../../atoms/FloatIcon/FloatIcon';
import FloatNav from '../../atoms/FloatNav/FloatNav';
import VerticalLine from '../../atoms/VerticalLine/VerticalLine';

interface FloatMenuProps {
  book: Book | undefined;
}

const FloatMenu: React.FC<FloatMenuProps> = ({ book }) => {
  const handleClick = (): void => {
    if (book) {
      window.open(book.volumeInfo.canonicalVolumeLink, '_blank');
    }
  };
  return (
    <FloatNav>
      <FloatIcon
        id="read-btn"
        action={handleClick}
        src="./images/bookOpen.svg"
        title="Read"
      />
      <VerticalLine />
      <FloatIcon
        id="listen-btn"
        action={handleClick}
        src="./images/headphones.svg"
        title="Listen"
      />
      <VerticalLine />
      <FloatIcon id="share-btn" src="./images/share.svg" title="Share" />
    </FloatNav>
  );
};

export default FloatMenu;
