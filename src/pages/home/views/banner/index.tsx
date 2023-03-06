import { Box, Link, useMediaQuery, useTheme } from '@mui/material';
import React, { ReactElement } from 'react';

import bannerAnimationData from '../../../../assets/animations/banner-animation.json';
import QuoteText from '../../../../components/quote-text';
import BannerMobile from './banner-mobile';
import {
  BannerAnimationImg,
  BannerContainer,
  BannerQuoteText,
  BannerSubtitle,
  BannerTitle,
  ButtonsContainer,
  BannerSectionWrapper,
  TextBlock,
  ButtonTrade,
  ButtonBuild,
  LinkButton,
} from './banner.styled';

export default function Banner(): ReactElement {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) {
    return <BannerMobile />;
  }

  return (
    <BannerSectionWrapper>
      <BannerContainer>
        <TextBlock>
          <BannerSubtitle>Next-Generation</BannerSubtitle>

          <BannerTitle>Decentralized Trading Infrastructure</BannerTitle>

          <QuoteText>
            <BannerQuoteText>
              A permissionless and modular protocol that brings high throughput, low latency, low fees, tight spreads
              and composability for DeFi builders
            </BannerQuoteText>
          </QuoteText>

          <ButtonsContainer>
            <LinkButton href='https://testnet-dex.woo.org/' target='_blank'>
              <ButtonTrade>Trade on WOO DEX</ButtonTrade>
            </LinkButton>
            <LinkButton href='https://docs.orderly.network/' target='_blank'>
              <ButtonBuild>Build on Orderly Network</ButtonBuild>
            </LinkButton>
          </ButtonsContainer>
        </TextBlock>
        <Box>
          <BannerAnimationImg loop animationData={bannerAnimationData} play />
        </Box>
      </BannerContainer>
    </BannerSectionWrapper>
  );
}
