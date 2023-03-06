import { Divider, styled, Box } from '@mui/material';

export const DividerContainerWrapper = styled(Box)`
  max-width: 1299px;
  margin: 0 auto;
  display: flex;
`;

export const DividerContainer = styled('div')`
  margin-right: 24px;
  height: inherit;
  margin-top: 2px;
  margin-bottom: 2px;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    padding: 0;
    margin-right: 24px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-right: 16px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const DividerStyled = styled(Divider)`
  padding: 6px 0;
  width: 8px;
  height: 100%;
  background: ${({ theme }) => theme.palette.highlight};
`;
