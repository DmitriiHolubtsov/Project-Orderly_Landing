import { styled, Typography } from '@mui/material';

export const HomeSectionContainer = styled('div')`
  padding-top: 48px;

  ${({ theme }) => theme.breakpoints.up('xl')} {
    padding-left: 0;
    padding-right: 0;
  }

  ${({ theme }) => theme.breakpoints.down('xl')} {
    padding-left: 118px;
    padding-right: 68px;
  }

  ${({ theme }) => theme.breakpoints.down('lg')} {
    padding-left: 56px;
    padding-right: 56px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-left: 54px;
    padding-right: 54px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const HomeSectionTitle = styled(Typography)`
  ${({ theme }) => theme.typography.h4};
  margin: 0 auto;
  max-width: 1299px;
  font-family: 'DIN2014-Bold', sans-serif;
  font-weight: 700;

  ${({ theme }) => theme.breakpoints.down('md')} {
    ${({ theme }) => theme.typography.h5};
    font-family: 'DIN2014-Bold', sans-serif;
    font-weight: 700;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    ${({ theme }) => theme.typography.h2};
    font-family: 'DIN2014-Demi', sans-serif;
    font-weight: 600;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    line-height: 110%;
    font-family: 'DIN2014-Demi', sans-serif;
    font-weight: 600;
  }
`;

export const SectionQuoteText = styled(Typography)`
  max-width: 968px;
  ${({ theme }) => theme.typography.body1};
  font-family: 'DIN2014-Regular', sans-serif;
  font-weight: 400;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    max-width: 791px;
    ${({ theme }) => theme.typography.body4};
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    ${({ theme }) => theme.typography.body3};
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    ${({ theme }) => theme.typography.body1};
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    ${({ theme }) => theme.typography.body1};
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }
`;
