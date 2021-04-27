import React from 'react';
import { Icon, IconWrapper, Label } from './style';

interface NavIconsProps {
    src: string;
    path: string;
    active?: string;
}

const NavIcon: React.FC<NavIconsProps> = ({ src, path, active }) => (
  <IconWrapper to="/" active={active === path ? 'active' : 'inactive'}>
    <Icon
      src={src}
      alt={`Path to ${path}`}
      active={active === path ? 'active' : 'inactive'}
    />
    <Label active={active === path ? 'active' : 'inactive'}>{path}</Label>
  </IconWrapper>
);

export default NavIcon;
