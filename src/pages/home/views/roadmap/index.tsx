import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import Swiper, { Autoplay, EffectFade, Navigation } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import { Phase1, Phase2, Phase3, Phase4 } from '../../../../assets/images';
import { HomeSectionTitle } from '../../home.styled';
import {
  PhaseDescriptionsContainer,
  PhaseStepsTextContainer,
  PhaseStepText,
  PhaseTitle,
  PhaseTitleContainer,
  PhaseTitleDivider,
  ProgressBarsContainer,
  RoadmapContainer,
  RoadmapPhasesContainer,
  SlideContent,
  SlidesContainer,
  SwiperSliderStyled,
  NavigationPrevBtn,
  NavigationNextBtn,
  PhaseProgressBar,
  ProgressBarClickableContainer,
} from './roadmap.styled';

interface PhaseSlide {
  image: ReactNode;
  texts: string[];
}

export const SLIDER_DELAY = 4000;

const SLIDES: PhaseSlide[] = [
  {
    image: <Phase1 />,
    texts: [
      'Decentralized asset custodian and settlement',
      'Spot orderbook trading',
      'First dApp (WOO DEX) launch on Orderly',
      'Liquidity bootstrap with single operator',
    ],
  },
  {
    image: <Phase2 />,
    texts: ['Perpetual futures trading', 'Margin financing', 'Community lending pools', 'More dApps launch on Orderly'],
  },
  {
    image: <Phase3 />,
    texts: [
      'Decentralized operators',
      'Load balancing and auto routing between operators',
      'Open-source matching engine',
    ],
  },
  {
    image: <Phase4 />,
    texts: [
      'Onchain orderbook and matching engine for spot and futures',
      'Decentralized lending function',
      'Onchain risk engines',
    ],
  },
];

export default function Roadmap(): ReactElement {
  const [swiperRef, setSwiperRef] = useState<Swiper | null>(null);
  const [phaseNumber, setPhaseNumber] = useState(1);
  const [slidesTransition, setSlidesTransition] = useState(true);

  // state to fix slider infinite loop
  // https://github.com/nolimits4web/swiper/issues/2942
  const [loopFix, setLoopFix] = useState(false);

  const transitionTime = slidesTransition ? SLIDER_DELAY : 0;

  const handleSlideChange = (swiper: Swiper): void => {
    setPhaseNumber(swiper.activeIndex + 1);
  };

  const handleSwiperRefChange = (swiper: Swiper): void => {
    setSwiperRef(swiper);
  };

  const handleWaypointEnter = (): void => {
    swiperRef?.autoplay.start();
  };

  const handleMouseEnter = (): void => {
    swiperRef?.autoplay.stop();
  };

  const handleMouseLeave = (): void => {
    if (slidesTransition) {
      swiperRef?.autoplay.start();
    }
  };

  const getSliderValue = (index: number): number => {
    if (swiperRef) {
      return swiperRef.activeIndex + 1 <= index ? 0 : 100;
    }
    return 0;
  };

  const handleNavigationBarClick = (): void => {
    setSlidesTransition(false);
    swiperRef?.autoplay.stop();
  };

  const handleSlideNext = (): void => {
    // return to 1st slider step when on last step
    if (swiperRef && swiperRef.activeIndex === 3) {
      if (loopFix) {
        swiperRef.slideTo(0);
        setPhaseNumber(1);
        setLoopFix(false);
      } else {
        setLoopFix(true);
      }
    }

    handleNavigationBarClick();
  };

  const handleBarClick = (index: number): void => {
    swiperRef?.slideTo(index);
    handleNavigationBarClick();
  };

  Swiper.use([Autoplay, EffectFade, Navigation]);

  useEffect((): undefined | (() => void) => {
    if (swiperRef) {
      swiperRef.autoplay.stop();

      return () => {
        swiperRef.destroy(true, true);
      };
    }

    return undefined;
  }, [swiperRef]);

  return (
    <RoadmapContainer id='roadmap'>
      <HomeSectionTitle>Roadmap</HomeSectionTitle>

      <RoadmapPhasesContainer>
        <SlidesContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SwiperSliderStyled
            grabCursor
            centeredSlides
            loop
            loopPreventsSlide
            loopedSlides={-1}
            effect='fade'
            speed={200}
            autoplay={{
              delay: SLIDER_DELAY,
              stopOnLastSlide: true,
              disableOnInteraction: true,
            }}
            onSwiper={handleSwiperRefChange}
            onSlideChange={handleSlideChange}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            <div>
              <NavigationPrevBtn className='swiper-button-prev' onClick={handleNavigationBarClick} />
              <NavigationNextBtn className='swiper-button-next' onClick={handleSlideNext} />
            </div>
            {SLIDES.map(({ image }) => (
              <SwiperSlide>
                <SlideContent>{image}</SlideContent>
              </SwiperSlide>
            ))}
          </SwiperSliderStyled>
          <ProgressBarsContainer>
            {SLIDES.map((_, index) => (
              <ProgressBarClickableContainer
                onClick={() => {
                  handleBarClick(index);
                }}
              >
                <PhaseProgressBar
                  transition={transitionTime}
                  key={`slider-progress-${index}`}
                  variant='determinate'
                  value={getSliderValue(index)}
                />
              </ProgressBarClickableContainer>
            ))}
          </ProgressBarsContainer>
        </SlidesContainer>

        <Waypoint onEnter={handleWaypointEnter} />

        <PhaseDescriptionsContainer>
          <PhaseTitleContainer>
            <PhaseTitleDivider />
            <PhaseTitle variant='subtitle1'>Phase {phaseNumber}</PhaseTitle>
          </PhaseTitleContainer>

          <PhaseStepsTextContainer>
            {SLIDES[phaseNumber - 1].texts.map((text) => (
              <PhaseStepText>{text}</PhaseStepText>
            ))}
          </PhaseStepsTextContainer>
        </PhaseDescriptionsContainer>
      </RoadmapPhasesContainer>
    </RoadmapContainer>
  );
}
