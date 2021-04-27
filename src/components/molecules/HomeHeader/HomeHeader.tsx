import React from 'react';
import { Action, HeaderWrapper, Title } from './style';

interface HomeHeaderProps {
    title: string;
    link: string;
    to: string;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ title, link, to }) => (
  <HeaderWrapper>
    <Title>{title}</Title>
    <Action to={to}>{link}</Action>
  </HeaderWrapper>
);

export default HomeHeader;
