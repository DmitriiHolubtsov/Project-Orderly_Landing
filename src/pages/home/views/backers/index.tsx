import React, { ReactElement } from 'react';

import agBuildLogo from '../../../../assets/images/ag-build.svg';
import alamedaLogo from '../../../../assets/images/alameda.svg';
import amberLogo from '../../../../assets/images/amber.svg';
import c2venturesLogo from '../../../../assets/images/c2venturesLogo.svg';
import coboLogo from '../../../../assets/images/cobo.svg';
import cryptoCapitalLogo from '../../../../assets/images/crypto-capital.svg';
import diVenturesLogo from '../../../../assets/images/diVenturesLogo.svg';
import dragonflyLogo from '../../../../assets/images/dragonfly.svg';
import gateLogo from '../../../../assets/images/gateLogo.svg';
import gsrLogo from '../../../../assets/images/gsr.svg';
import idsgLogo from '../../../../assets/images/idsgLogo.svg';
import jumpLogo from '../../../../assets/images/jump.svg';
import kronosLogo from '../../../../assets/images/kronos.svg';
import legenderPrimeLogo from '../../../../assets/images/legenderPrimeLogo.svg';
import metaWebLogo from '../../../../assets/images/meta-web.svg';
import miranaLogo from '../../../../assets/images/miranaLogo.svg';
import newmanLogo from '../../../../assets/images/newmanLogo.svg';
import panteraLogo from '../../../../assets/images/pantera.svg';
import puzzleLogo from '../../../../assets/images/puzzleLogo.svg';
import raydiumLogo from '../../../../assets/images/raydium.svg';
import sequqiaLogo from '../../../../assets/images/sequqia-capital.svg';
import sevenLogo from '../../../../assets/images/sevenLogo.svg';
import subzeroVenturesLogo from '../../../../assets/images/subzero-ventures.svg';
import wooVenturesLogo from '../../../../assets/images/woo-ventures.svg';
import QuoteText from '../../../../components/quote-text';
import { SectionQuoteText } from '../../home.styled';
import { BackersContainer, BackersTitle, SponsorsContainer, SponsorsContainerWrapper } from './backers.styled';

const SPONSORS = [
  {
    src: panteraLogo,
    alt: 'Pantera',
  },
  {
    src: dragonflyLogo,
    alt: 'dragonfly',
  },
  {
    src: sequqiaLogo,
    alt: 'Sequqia Capital',
  },
  {
    src: jumpLogo,
    alt: 'jump',
  },
  {
    src: alamedaLogo,
    alt: 'alameda',
  },
  {
    src: gsrLogo,
    alt: 'gsr',
  },
  {
    src: cryptoCapitalLogo,
    alt: 'crypto-capital',
  },
  {
    src: amberLogo,
    alt: 'amber',
  },
  {
    src: agBuildLogo,
    alt: 'AG-build',
  },
  {
    src: kronosLogo,
    alt: 'kronos',
  },
  {
    src: coboLogo,
    alt: 'cobo',
  },
  {
    src: raydiumLogo,
    alt: 'Raydium',
  },
  {
    src: gateLogo,
    alt: 'gate',
  },
  {
    src: miranaLogo,
    alt: 'mirana',
  },
  {
    src: sevenLogo,
    alt: 'seven',
  },
  {
    src: puzzleLogo,
    alt: 'puzzle',
  },
  {
    src: wooVenturesLogo,
    alt: 'woo ventures',
  },
  {
    src: metaWebLogo,
    alt: 'Meta-web',
  },
  {
    src: idsgLogo,
    alt: 'idsg',
  },
  {
    src: subzeroVenturesLogo,
    alt: 'Subzero ventures',
  },
  {
    src: c2venturesLogo,
    alt: 'C2 ventyres',
  },
  {
    src: diVenturesLogo,
    alt: 'DI ventures',
  },
  {
    src: legenderPrimeLogo,
    alt: 'Ledger Prime',
  },
  {
    src: newmanLogo,
    alt: 'NEWMAN',
  },
];

export default function Backers(): ReactElement {
  return (
    <BackersContainer>
      <BackersTitle>Backers</BackersTitle>

      <QuoteText>
        <SectionQuoteText>
          We have raised an exclusively strategic round with backers that will help us drive the future of Orderly
          Network. These comprise of a mixture of Market Makers & Traders, VCs and Ecosystem builders.
        </SectionQuoteText>
      </QuoteText>
      <SponsorsContainerWrapper>
        <SponsorsContainer>
          {SPONSORS.map(({ src, alt }) => (
            <img key={alt} src={src} alt={alt} />
          ))}
        </SponsorsContainer>
      </SponsorsContainerWrapper>
    </BackersContainer>
  );
}
