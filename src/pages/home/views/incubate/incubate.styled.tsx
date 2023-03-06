import { styled, Typography } from '@mui/material';
import { HomeSectionContainer, HomeSectionTitle, SectionQuoteText } from '../../home.styled';

export const IncubateContainer = styled(HomeSectionContainer)`
  padding-top: 80px;
  background: linear-gradient(0deg, #080000 41.15%, #190257 100%);
  padding-bottom: 120px;

  ${({ theme }) => theme.breakpoints.up('lg')} {
    min-height: 802px;
  }

  ${({ theme }) => theme.breakpoints.down('lg')} {
    min-height: 788px;
    padding-bottom: 120px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-top: 48px;
    min-height: 724px;
    padding-bottom: 112px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-top: 80px;
    padding-bottom: 60px;
  }
`;

export const IncubateTitle = styled(HomeSectionTitle)`
  margin-bottom: 36px;
  font-family: 'DIN2014-Bold', sans-serif;
  font-weight: 700;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: 16px;
    font-family: 'DIN2014-Bold', sans-serif;
    font-weight: 700;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-bottom: 24px;
    font-family: 'DIN2014-Demi', sans-serif;
    font-weight: 600;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    line-height: 110%;
    font-size: 28px;
    font-family: 'DIN2014-Demi', sans-serif;
    font-weight: 600;
  }
`;

export const IncubateItemCard = styled('div', {
  shouldForwardProp: (prop) => prop !== 'selected' && prop !== 'align',
})<{
  centered: boolean;
  align: 'left' | 'right';
}>`
  position: absolute;
  height: 320px;
  width: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: ${({ align }) => `${align} 400ms linear`};

  ${({ theme }) => theme.breakpoints.up('xl')} {
    ${({ align, centered }) => ({
      [align]: centered ? 'calc(50% - 20px)' : '65%',
    })}
  }

  ${({ theme }) => theme.breakpoints.down('xl')} {
    ${({ align, centered }) => ({
      [align]: centered ? 'calc(50% - 20px)' : '65%',
    })}
  }

  ${({ theme }) => theme.breakpoints.down('lg')} {
    width: 471px;
    padding: 0 65px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding: 0 56px;
    width: 339px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 200px;
    align-items: flex-start;
    text-align: left;
    padding: 0 28px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 38px 28px;
    height: auto;
    min-height: 200px;
    max-width: 320px;
    ${({ align, centered }) => ({
      [align]: centered ? 'calc(50% - 10px)' : '65%',
    })}
  }
`;

export const IncubateCardText = styled(Typography)`
  margin-top: 20px;
  max-width: 476px;
  ${({ theme }) => theme.typography.body2}
  font-family: 'DIN2014-Regular', sans-serif;
  font-weight: 400;
  opacity: 0.6;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    max-width: 340px;
    ${({ theme }) => theme.typography.body4}
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-width: 227px;
    ${({ theme }) => theme.typography.body3}
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: 132px;
    ${({ theme }) => theme.typography.body2}
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }
`;

export const WooCard = styled(IncubateItemCard)`
  background: linear-gradient(250.54deg, #14377d -1.31%, rgb(71 61 86 / 45%) 100%);

  ${({ theme }) => theme.breakpoints.down('sm')} {
    top: -100px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 38px 40px 40px 28px;
  }
`;

export const NearCard = styled(IncubateItemCard)`
  top: -75px;
  background: linear-gradient(250.26deg, rgba(69 72 104 / 33%) 0%, rgb(135 69 100 / 75%) 93.23%);

  ${({ theme }) => theme.breakpoints.down('sm')} {
    top: 0;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding: 59px 20px 64px 50px;
  }
`;

export const IncubateQuoteText = styled(SectionQuoteText)`
  font-family: 'DIN2014-Regular', sans-serif;
  font-weight: 400;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    max-width: 812px;
    line-height: 19px;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    line-height: 120%;
  }
`;

export const CardsContainerStyled = styled('div')`
  display: flex;
  margin-top: 200px;
  justify-content: center;
  position: relative;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-top: 153px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 146px;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    height: 310px;
  }
`;
