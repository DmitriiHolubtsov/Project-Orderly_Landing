import { useMediaQuery, useTheme } from '@mui/material';
import React, { ReactElement, useState } from 'react';
import { Waypoint } from 'react-waypoint';

import { NearLogo, WooLogo, WooMobileLogo, NearMobileLogo } from '../../../../assets/images';
import QuoteText from '../../../../components/quote-text';
import {
  CardsContainerStyled,
  IncubateCardText,
  IncubateContainer,
  IncubateQuoteText,
  IncubateTitle,
  NearCard,
  WooCard,
} from './incubate.styled';

export default function Incubate(): ReactElement {
  const theme = useTheme();
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const [centeredBlocks, setCenteredBlocks] = useState(false);

  const handleWaypointEnter = (): void => {
    setCenteredBlocks(true);
  };

  return (
    <IncubateContainer id='ecosystem'>
      <IncubateTitle>Incubated by The Best</IncubateTitle>

      <QuoteText>
        <IncubateQuoteText>
          Leveraging the strengths of industry heavyweights, Orderly Network is incubated by the teams from WOO Network
          and NEAR.
        </IncubateQuoteText>
      </QuoteText>

      <CardsContainerStyled>
        <WooCard centered={centeredBlocks} align='right'>
          {isSmallMobile ? <WooMobileLogo /> : <WooLogo />}
          <IncubateCardText>
            Experts in the orderbook exchange and liquidity landscape, WOO Network facilitates trading for clients
            including leading institutions, exchanges, dApps, and professional traders.
          </IncubateCardText>
        </WooCard>
        <NearCard centered={centeredBlocks} align='left'>
          {isSmallMobile ? <NearMobileLogo /> : <NearLogo />}
          <IncubateCardText>
            A high-throughput, scalable, future-safe platform with intuitive developer tools and an engaged,
            decentralized community.
          </IncubateCardText>
        </NearCard>
      </CardsContainerStyled>

      <Waypoint onEnter={handleWaypointEnter} />
    </IncubateContainer>
  );
}
