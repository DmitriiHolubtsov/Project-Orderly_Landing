import { Divider, styled, Typography } from '@mui/material';

import { HomeSectionContainer } from '../../pages/home/home.styled';

export const FooterContainer = styled(HomeSectionContainer)`
  min-height: 196px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 56px;
  background: ${({ theme }) => theme.palette.primary.light};

  ${({ theme }) => theme.breakpoints.up('lg')} {
    margin-top: 80px;
  }

  ${({ theme }) => theme.breakpoints.down('lg')} {
    margin-top: 114px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-top: 80px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    align-items: flex-start;
    padding-top: 80px;
    margin-top: 0;
  }
`;

export const SocialMediaContainer = styled('nav')`
  margin-bottom: 25px;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 6px;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    margin-bottom: 6px;
  }
`;

export const SocialMediaLinkWrapper = styled('div')`
  padding: 0 24px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-bottom: 24px;
    padding-left: 0;
  }
`;

export const SocialMediaLink = styled('a')`
  padding: 2px 34px;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.text.primary};
  ${({ theme }) => theme.typography.button2};
  font-family: 'DIN2014-Regular', sans-serif;
  font-weight: 400;

  &:hover {
    text-decoration: underline;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    padding: 0;
    margin-bottom: 6px;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    font-weight: 400;
    font-family: 'DIN2014-Regular', sans-serif;
  }
`;

export const LinksDivider = styled(Divider)`
  width: 1px;
  height: 22px;
  background: rgb(255 255 255 / 45%);
  border-radius: 100px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: none;
  }
`;

export const CopyrightText = styled(Typography)`
  ${({ theme }) => theme.breakpoints.up('sm')} {
    font-family: Roboto, sans-serif;
  }

  font-weight: 400;
  font-size: 16px;
  color: rgb(255 255 255 / 45%);
  letter-spacing: 0;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: 14px;
    line-height: 125%;
    letter-spacing: -0.05px;
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }
`;
