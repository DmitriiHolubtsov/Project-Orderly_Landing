import { Divider, LinearProgress, styled, Typography, linearProgressClasses } from '@mui/material';
import { Swiper as SwiperSlider } from 'swiper/react';
import { HomeSectionContainer } from '../../home.styled';
import { SLIDER_DELAY } from './index';

export const RoadmapContainer = styled(HomeSectionContainer)`
  min-height: 584px;
  background: linear-gradient(180deg, #080000 41.15%, #190257 100%);
  padding-bottom: 116px;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    padding-bottom: 126px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-bottom: 80px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    padding-bottom: 60px;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    padding-top: 82px;
  }
`;

export const RoadmapPhasesContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1299px;
  width: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.breakpoints.up('lg')} {
    margin-top: 145px;
  }

  ${({ theme }) => theme.breakpoints.down('lg')} {
    margin-top: 140px;
    justify-content: space-between;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-top: 57px;
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-top: 30px;
  }
`;

export const SlidesContainer = styled('div')`
  flex: 0 1 418px;
  margin-right: 60px;

  ${({ theme }) => theme.breakpoints.down('lg')} {
    margin-right: 72px;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-right: 0;
    flex: auto;
  }
`;

export const SwiperSliderStyled = styled(SwiperSlider)`
  width: 480px;
  margin-bottom: 46px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: calc(100vw - 40px);
    margin-bottom: 36px;
  }

  &:hover {
    .swiper-button-prev,
    .swiper-button-next {
      display: flex;
    }
  }
`;

export const NavigationPrevBtn = styled('div')`
  &.swiper-button-prev {
    display: none;
    width: 45px;
    height: 45px;

    &::after {
      color: #a8a8a830;
      font-size: 45px;
      font-weight: bold;
    }

    &.swiper-button-disabled {
      opacity: 1;
    }
  }
`;

export const NavigationNextBtn = styled('div')`
  &.swiper-button-next {
    display: none;
    width: 45px;
    height: 45px;
    justify-content: center;

    &::after {
      color: #a8a8a830;
      font-size: 45px;
      font-weight: bold;
    }

    &.swiper-button-disabled {
      opacity: 1;
    }
  }
`;

export const SlideContent = styled('div')`
  height: 175px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const PhaseTitleDivider = styled(Divider)`
  width: 109px;
  height: 8px;
  background: ${({ theme }) => theme.palette.highlight};

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 98px;
    margin-left: 18px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    display: none;
  }
`;

export const PhaseStepText = styled(Typography)`
  position: relative;
  padding-left: 16px;
  text-align: left;
  opacity: 0.8;
  ${({ theme }) => theme.typography.body1};
  font-family: 'DIN2014-Regular', sans-serif;
  font-weight: 400;

  ${({ theme }) => theme.breakpoints.up('lg')} {
    max-width: 469px;
  }

  ${({ theme }) => theme.breakpoints.down('lg')} {
    max-width: 331px;
    ${({ theme }) => theme.typography.body4};
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakpoints.down('md')} {
    max-width: 281px;
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

  &::before {
    position: absolute;
    left: 0;
    content: '/';
  }
`;

export const ProgressBarClickableContainer = styled('div')`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 24px;
`;

export const PhaseProgressBar = styled(LinearProgress, {
  shouldForwardProp: (prop) => prop !== 'transition',
})<{ transition: number }>`
  height: 4px;
  width: 108px;
  cursor: pointer;

  .MuiLinearProgress-bar {
    ${({ transition }) =>
      transition > 0
        ? {
            transition: 'transform 4s linear',
          }
        : { transition: 'none' }}
  }

  ${({ theme }) => ({
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: 'rgba(255, 255, 255, 0.2);',
    },
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: theme.palette.text.primary,
    },
  })}

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 80px;
  }
`;

export const PhaseDescriptionsContainer = styled('div')`
  flex: 0 0 450px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-top: 60px;
    display: flex;
    width: 100%;
    max-width: 514px;
    justify-content: space-around;
    flex: auto;
  }
`;

export const PhaseTitleContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column-reverse;
    justify-content: center;
    margin-bottom: 0;
    flex: 1 1 120px;
    margin-right: 50px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-right: 0;
    flex: 1 1 67px;
    justify-content: flex-end;
  }
`;

export const PhaseTitle = styled(Typography)`
  margin-left: 16px;
  font-family: 'DIN2014-Demi', sans-serif;
  font-weight: 600;

  ${({ theme }) => theme.breakpoints.down('md')} {
    margin-bottom: 8px;
    font-family: 'DIN2014-Demi', sans-serif;
    font-weight: 600;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    margin-left: 0;
    min-width: 96px;
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }

  ${({ theme }) => theme.breakpoints.down('xs')} {
    font-family: 'DIN2014-Regular', sans-serif;
    font-weight: 400;
  }
`;

export const PhaseStepsTextContainer = styled(`div`)`
  ${({ theme }) => theme.breakpoints.down('md')} {
    flex: 1 1 281px;
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex: 1 1 auto;
  }
`;

export const ProgressBarsContainer = styled('div')`
  display: flex;
  justify-content: center;
  width: 100%;

  & > * {
    &:not(:last-child) {
      margin-right: 8px;

      ${({ theme }) => theme.breakpoints.down('xs')} {
        margin-right: 6px;
      }
    }
  }
`;
