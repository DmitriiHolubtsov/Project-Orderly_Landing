import { Button, styled } from '@mui/material';

export const ButtonStyled = styled(Button)`
  max-height: 53px;
  height: 53px;
  padding: 12px 40px;
  border-radius: 0;
  border-width: 2px;
  border-image-slice: 1;
  border-image-source: ${({ theme }) =>
    `linear-gradient(to left, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`};
  color: ${({ theme }) => theme.palette.text.primary};
  text-transform: none;
  ${({ theme }) => theme.typography.button};

  &:hover {
    border-width: 2px;
    border-image-slice: 1;
    border-image-source: ${({ theme }) =>
      `linear-gradient(to left, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`};
    background: ${({ theme }) =>
      `linear-gradient(264.55deg, ${theme.palette.primary.main} 4.35%, ${theme.palette.secondary.main} 95.65%)`};
  }

  ${({ theme }) => theme.breakpoints.down('lg')} {
    padding: 9px 24px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-height: 35px;
    height: 35px;
    padding: 8px 12px;
    ${({ theme }) => theme.typography.button2}
    font-family: 'DIN2014-Demi', sans-serif;
    font-weight: 600;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 12px 16px;
    max-height: 44px;
    height: 44px;
    ${({ theme }) => theme.typography.button}
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }
`;
