import { List, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

import {
  HashLinkStyled,
  MobileNavMenuStyled,
  NavItemButtonStyled,
  NavItemStyled,
  NavLinkStyledExternal,
} from './mobile-nav-menu';

interface NavItem {
  title: string;
  path: string;
  onClick: () => void;
}

interface MobileNavMenuProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileNavMenu({ open, onClose, navItems }: MobileNavMenuProps): ReactElement {
  return (
    <MobileNavMenuStyled anchor='right' open={open} onClose={onClose}>
      <List>
        {navItems.map(({ title, onClick, path }, index) => (
          <NavItemStyled key={`mobile-nav-item-${index}`}>
            <HashLinkStyled smooth to={path}>
              <NavItemButtonStyled onClick={onClick}>
                <Typography variant='button2'>{title}</Typography>
              </NavItemButtonStyled>
            </HashLinkStyled>
          </NavItemStyled>
        ))}
        <NavLinkStyledExternal target='_blank' href='https://boards.greenhouse.io/orderlynetwork'>
          Careers
        </NavLinkStyledExternal>
        <NavLinkStyledExternal target='_blank' href='https://medium.com/@orderlynetwork'>
          Blog
        </NavLinkStyledExternal>
      </List>
    </MobileNavMenuStyled>
  );
}
