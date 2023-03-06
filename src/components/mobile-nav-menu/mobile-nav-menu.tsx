import { Drawer, ListItem, ListItemButton, styled } from '@mui/material';
import { HashLink } from 'react-router-hash-link';

export const MobileNavMenuStyled = styled(Drawer)`
  top: 80px;

  & .MuiBackdrop-root {
    top: 80px;
  }

  & .MuiDrawer-paper {
    margin-top: 80px;
    width: 100%;
    background: linear-gradient(359.9deg, #080000 41.16%, #190257 99.91%);

    ${({ theme }) => theme.breakpoints.down('sm')} {
      margin-top: 60px;
    }
  }
`;

export const NavItemStyled = styled(ListItem)`
  padding: 0;
`;

export const HashLinkStyled = styled(HashLink)`
  width: 100%;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
  font-family: 'DIN2014-Regular', sans-serif;
  font-weight: 400;
`;

export const NavItemButtonStyled = styled(ListItemButton)`
  padding: 24px 20px;
  font-family: 'DIN2014-Regular', sans-serif;
  font-weight: 400;

  & .MuiTypography-root {
    font-size: 20px;
    line-height: 120%;
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }
`;

export const NavLinkStyledExternal = styled('a')`
  display: block;
  padding: 24px 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
  font-family: 'DIN2014-Regular', sans-serif;
  font-weight: 400;

  & .MuiTypography-root {
    font-size: 20px;
    line-height: 120%;
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }
`;
