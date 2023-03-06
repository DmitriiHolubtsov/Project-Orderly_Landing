import { styled } from '@mui/material';
import { HomeSectionContainer, HomeSectionTitle } from '../../home.styled';

export const BackersContainer = styled(HomeSectionContainer)`
  padding-top: 80px;
  background: linear-gradient(180deg, #080000 41.15%, #190257 100%);
  min-height: 829px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-top: 48px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-top: 80px;
  }
`;

export const BackersTitle = styled(HomeSectionTitle)`
  margin-bottom: 36px;
  font-family: 'DIN2014-Bold', sans-serif;
  font-weight: 700;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    margin-bottom: 24px;
    font-family: 'DIN2014-Bold', sans-serif;
    font-weight: 700;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: 16px;
    font-family: 'DIN2014-Bold', sans-serif;
    font-weight: 700;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-bottom: 10px;
    font-size: 28px;
    line-height: 110%;
    font-family: 'DIN2014-Demi', sans-serif;
    font-weight: 600;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    font-family: 'DIN2014-Demi', sans-serif;
    font-weight: 600;
  }
`;

export const SponsorsContainerWrapper = styled('div')`
  margin: 0 auto;
  max-width: 1300px;
`;

export const SponsorsContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  justify-content: space-around;
  column-gap: 16px;
  row-gap: 24px;

  & img {
    flex: 0 0 calc(20% - 20px);
    max-width: 227px;
  }

  ${({ theme }) => theme.breakpoints.down('lg')} {
    grid-template-columns: repeat(4, 215px);
    column-gap: 16px;
    row-gap: 24px;

    & img {
      width: 216px;
      height: 128px;
    }
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-top: 100px;
    grid-template-columns: repeat(3, 208px);
    justify-content: center;

    & img {
      width: 208px;
      height: 128px;
    }

    & img:last-child {
      grid-column: 3 / 2;
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 32px;
    grid-template-columns: repeat(auto-fit, 159px);

    & img {
      width: 159px;
    }

    & img:last-child {
      grid-column: 3 / 2;
    }
  }

  ${({ theme }) => theme.breakpoints.down(548)} {
    & img:last-child {
      grid-column: 3 / 1;
    }
  }

  ${({ theme }) => theme.breakpoints.down(517)} {
    grid-template-columns: repeat(auto-fit, 159px);
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    grid-template-columns: repeat(auto-fit, 159px);
    column-gap: 12px;
    row-gap: 16px;

    & img {
      width: 100%;
      height: 90px;
    }

    & img:last-child {
      grid-column: 1 / 1;
    }
  }
`;
