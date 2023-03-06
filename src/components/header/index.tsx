import { useMediaQuery, useTheme, IconButton } from '@mui/material';
import React, { ReactElement, useState } from 'react';

import { Logo, MenuIcon, CancelIcon } from '../../assets/images';
import { AppRoutes } from '../../cdk/enums';
import MobileNavMenu from '../mobile-nav-menu';
import { HeaderContainerStyled, NavContainer, NavLinkStyled, NavLinkStyledExternal } from './header.styled';

export default function Header(): ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  const navItems = [
    {
      title: 'Roadmap',
      path: AppRoutes.Roadmap,
      onClick: () => {
        setMobileMenuOpened(false);
      },
    },
    {
      title: 'Ecosystem',
      path: AppRoutes.Ecosystem,
      onClick: () => {
        setMobileMenuOpened(false);
      },
    },
  ];

  const handleMobileMenuButtonClick = (): void => {
    setMobileMenuOpened(true);
  };

  const handleMobileMenuClose = (): void => {
    setMobileMenuOpened(false);
  };

  return (
    <HeaderContainerStyled>
      <Logo />
      <NavContainer>
        {isMobile ? (
          <IconButton onClick={mobileMenuOpened ? handleMobileMenuClose : handleMobileMenuButtonClick}>
            {mobileMenuOpened ? <CancelIcon /> : <MenuIcon />}
          </IconButton>
        ) : (
          <>
            <NavLinkStyled smooth to={AppRoutes.Roadmap}>
              Roadmap
            </NavLinkStyled>
            <NavLinkStyled smooth to={AppRoutes.Ecosystem}>
              Ecosystem
            </NavLinkStyled>
            <NavLinkStyledExternal href='https://boards.greenhouse.io/orderlynetwork' target='_blank'>
              Careers
            </NavLinkStyledExternal>
            <NavLinkStyledExternal href='https://medium.com/@orderlynetwork' target='_blank'>
              Blog
            </NavLinkStyledExternal>
          </>
        )}
      </NavContainer>

      <MobileNavMenu navItems={navItems} open={mobileMenuOpened} onClose={handleMobileMenuClose} />
    </HeaderContainerStyled>
  );
}
