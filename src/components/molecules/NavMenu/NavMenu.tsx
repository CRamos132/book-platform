import React from 'react';
import BottomNav from '../../atoms/BottomNav/BottomNav';
import NavIcon from '../../atoms/NavIcon/NavIcon';

interface MenuProps {
    active: string;
}

const NavMenu: React.FC<MenuProps> = ({ active }) => (
  <BottomNav>
    <NavIcon src="./images/home.svg" path="home" active={active} />
    <NavIcon src="./images/book.svg" path="libraries" active={active} />
    <NavIcon src="./images/person.svg" path="profile" active={active} />
  </BottomNav>
);

export default NavMenu;
