import { styled } from '@mui/material';
import { HashLink } from 'react-router-hash-link';

export const HeaderContainerStyled = styled('header')`
  display: flex;
  align-items: center;
  background: #190257;
  height: 80px;
  max-height: 80px;
  padding: 0 40px;

  ${({ theme }) => theme.breakpoints.up('sm')} {
    padding: 0 40px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 0 20px;
    height: 64px;
  }
`;

export const NavContainer = styled('nav')`
  margin-left: auto;

  & > * {
    &:not(:last-child) {
      margin-right: 24px;
    }
  }
`;

export const NavLinkStyled = styled(HashLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0;
  font-family: 'DIN2014-Demi', sans-serif;
  font-weight: 600;
`;

export const NavLinkStyledExternal = styled('a')`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0;
  font-family: 'DIN2014-Demi', sans-serif;
  font-weight: 600;
`;
