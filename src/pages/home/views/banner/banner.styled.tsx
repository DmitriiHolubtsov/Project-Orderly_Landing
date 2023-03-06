import { styled, Typography, Box, Link } from '@mui/material';
import Button from '../../../../components/button';
import bannerDecoration from '../../../../assets/images/banner-decoration.svg';
import { HomeSectionContainer } from '../../home.styled';
import Lottie from 'react-lottie-player';

export const BannerSectionWrapper = styled(Box)`
  background: linear-gradient(0deg, #080000 41.15%, #190257 100%);
  width: 100%;
  overflow-x: hidden;
`;

export const BannerContainer = styled(HomeSectionContainer)`
  display: flex;
  justify-content: space-between;
  overflow: visible;
  position: relative;
  min-height: 717px;
  width: 100%;
  max-width: 1299px;
  padding-top: 0;
  padding-right: 67px;
  margin: 0 auto;
  column-gap: 141px;

  ${({ theme }) => theme.breakpoints.up('xl')} {
    padding-bottom: 160px;
  }

  ${({ theme }) => theme.breakpoints.down('xl')} {
    padding-bottom: 58px;
    margin: 0;
  }

  ${({ theme }) => theme.breakpoints.down('lg')} {
    min-height: 767px;
    padding-bottom: 166px;
    column-gap: 0;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-bottom: 20px;
    min-height: 580px;
    height: auto;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    height: auto;
    padding-bottom: 60px;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    padding-top: 40px;
  }

  &::before {
    content: '""';
    position: absolute;
    width: 327px;
    height: 327px;
    top: -82px;
    left: -52px;
    background-image: url(${bannerDecoration});
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.7;

    ${({ theme }) => theme.breakpoints.down('xl')} {
      width: 327px;
      height: 327px;
      top: -82px;
      left: 50px;
    }

    ${({ theme }) => theme.breakpoints.down('lg')} {
      left: 26px;
      width: 259px;
      height: 259px;
      top: -34px;
    }

    ${({ theme }) => theme.breakpoints.down('md')} {
      left: 19px;
      width: 247px;
      height: 247px;
      top: -55px;
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
      left: -2px;
      width: 230px;
      height: 205px;
      top: -37px;
    }

    ${({ theme }) => theme.breakpoints.down('xs')} {
      left: -2px;
      width: 189px;
      height: 189px;
      top: -32px;
    }
  }
`;

export const TextBlock = styled('div')`
  ${({ theme }) => theme.breakpoints.up(1440)} {
    position: relative;
  }

  ${({ theme }) => theme.breakpoints.down('xl')} {
    position: relative;
  }
`;

export const BannerSubtitle = styled(Typography)`
  padding-top: 54px;

  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-bottom: 8px;
    ${({ theme }) => theme.typography.subtitle1};
    font-family: 'DIN2014-Demi', sans-serif;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-top: 0;
    margin-top: 61px;
    margin-bottom: 8px;
    ${({ theme }) => theme.typography.subtitle2};
    font-family: 'DIN2014-Demi', sans-serif;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-bottom: 10px;
    ${({ theme }) => theme.typography.subtitle1};
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    line-height: 110%;
    margin-top: 0;
  }
`;

export const BannerTitle = styled(Typography)`
  ${({ theme }) => theme.breakpoints.up('md')} {
    margin-bottom: 68px;
    max-width: 428px;
    ${({ theme }) => theme.typography.h1};
    font-family: 'DIN2014-Demi', sans-serif;
    font-weight: 600;
  }

  ${({ theme }) => theme.breakpoints.up('xl')} {
    margin-bottom: 96px;
  }

  ${({ theme }) => theme.breakpoints.down('xl')} {
    margin-bottom: 96px;
  }

  ${({ theme }) => theme.breakpoints.down('lg')} {
    margin-bottom: 70px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: 61px;
    max-width: 319px;
    ${({ theme }) => theme.typography.h2};
    font-family: 'DIN2014-Demi', sans-serif;
    font-weight: 600;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-bottom: 0;
    ${({ theme }) => theme.typography.h1};
    font-family: 'DIN2014-Demi', sans-serif;
    font-weight: 600;
    letter-spacing: 0;
  }
`;

export const BannerQuoteText = styled(Typography)`
  max-width: 421px;
  width: 421px;

  ${({ theme }) => theme.breakpoints.up('md')} {
    ${({ theme }) => theme.typography.body1};
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    ${({ theme }) => theme.typography.body3};
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
    max-width: 242px;
    width: 242px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: 391px;
    width: 100%;
    ${({ theme }) => theme.typography.body1};
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakpoints.down(450)} {
    max-width: 341px;
    width: 100%;
    ${({ theme }) => theme.typography.body1};
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakpoints.down(400)} {
    max-width: 321px;
    width: 100%;
    ${({ theme }) => theme.typography.body1};
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    max-width: 311px;
    width: 100%;
    line-height: 120%;
    letter-spacing: 0;
  }
`;

export const BannerAnimationImg = styled(Lottie)`
  ${({ theme }) => theme.breakpoints.up('lg')} {
    width: 662px;
    height: 747px;
  }

  ${({ theme }) => theme.breakpoints.down('lg')} {
    width: 515px;
    height: 581px;
    position: relative;
    left: -18px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 438px;
    height: 494px;
    margin-top: 70px;
    position: relative;
    left: -54px;
    margin-right: 12px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100vw;
    margin-top: 0;
  }
`;

export const BannerStaticImg = styled('img')`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 495px;
    height: 556px;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    margin-bottom: 16px;
    width: 363px;
    height: 556px;
    position: relative;
    left: -8px;
  }
`;

export const ButtonsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-top: 54px;
  text-transform: none;

  ${({ theme }) => theme.breakpoints.up('md')} {
    & .MuiButton-root {
      max-height: 53px;
      height: 53px;
      padding-top: 13px;
      font-family: 'DIN2014-Demi', sans-serif;
      font-weight: 600;
      padding-left: 40px;
      padding-right: 40px;
    }
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-top: 24px;
    font-family: 'DIN2014-Demi', sans-serif;
    font-weight: 600;
    row-gap: 16px;

    & .MuiButton-root {
      padding-top: 12px;
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 32px;
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;

    & .MuiButton-root {
      max-height: 35px;
      height: 35px;
      letter-spacing: 0.05em;
      padding: 16px 12px;
      padding-bottom: 14px;
    }
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    & .MuiButton-root {
      padding: 12px 10px;
      padding-top: 14px;
      max-height: 44px;
      height: 44px;
    }
  }
`;

export const ButtonTrade = styled(Button)`
  max-width: 322px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-width: 300px;
    width: fit-content;
    letter-spacing: 0.05em;
    white-space: nowrap;
  }
`;
export const ButtonBuild = styled(Button)`
  max-width: 442px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-width: 300px;
    letter-spacing: 0.05em;
    white-space: nowrap;
  }
`;

export const LinkButton = styled(Link)`
  text-decoration: none;
`;
