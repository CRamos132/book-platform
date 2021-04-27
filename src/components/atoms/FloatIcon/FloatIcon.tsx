import React from 'react';
import { Icon, IconWrapper, Label } from './style';

interface NavIconsProps {
    src: string;
    title: string;
    action?: ()=>void;
}

const FloatIcon: React.FC<NavIconsProps> = ({ src, title, action }) => {
  const handleClick = (): void => {
    if (action) {
      action();
    }
  };
  return (
    <IconWrapper onClick={handleClick}>
      <Icon src={src} alt={`Path to ${title}`} />
      <Label>{title}</Label>
    </IconWrapper>
  );
};

export default FloatIcon;
