import { Box, Link } from '@mui/material';
import React, { ReactElement } from 'react';

import bannerImg from '../../../../assets/images/banner-static.png';
import Button from '../../../../components/button';
import QuoteText from '../../../../components/quote-text';
import {
  BannerContainer,
  BannerQuoteText,
  BannerStaticImg,
  BannerSubtitle,
  BannerTitle,
  ButtonsContainer,
  BannerSectionWrapper,
  ButtonTrade,
  ButtonBuild,
  LinkButton,
} from './banner.styled';

export default function BannerMobile(): ReactElement {
  return (
    <BannerSectionWrapper>
      <BannerContainer>
        <Box position='relative'>
          <BannerSubtitle>Next-Generation</BannerSubtitle>

          <BannerTitle>Decentralized Trading Infrastructure</BannerTitle>

          <Box>
            <picture>
              <BannerStaticImg src={bannerImg} alt='animation' />
            </picture>
          </Box>

          <QuoteText>
            <BannerQuoteText>
              A permissionless and modular protocol that brings high throughput, low latency, low fees, tight spreads
              and composability for DeFi builders on NEAR
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
        </Box>
      </BannerContainer>
    </BannerSectionWrapper>
  );
}
