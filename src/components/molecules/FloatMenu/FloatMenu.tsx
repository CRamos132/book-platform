import React from 'react';
import FloatIcon from '../../atoms/FloatIcon/FloatIcon';
import FloatNav from '../../atoms/FloatNav/FloatNav';
import VerticalLine from '../../atoms/VerticalLine/VerticalLine';

const FloatMenu: React.FC = () => (
  <FloatNav>
    <FloatIcon src="./images/bookOpen.svg" title="Read" />
    <VerticalLine />
    <FloatIcon src="./images/headphones.svg" title="Listen" />
    <VerticalLine />
    <FloatIcon src="./images/share.svg" title="Share" />
  </FloatNav>
);

export default FloatMenu;
