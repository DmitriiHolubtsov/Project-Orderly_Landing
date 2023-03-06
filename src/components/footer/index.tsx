import React, { ReactElement } from 'react';

import {
  CopyrightText,
  FooterContainer,
  LinksDivider,
  SocialMediaContainer,
  SocialMediaLinkWrapper,
  SocialMediaLink,
} from './footer.styled';

interface SocialMedia {
  text: string;
  path: string;
}

const SOCIAL_MEDIA: SocialMedia[] = [
  { text: 'Twitter', path: 'https://twitter.com/OrderlyNetwork' },
  { text: 'Discord', path: 'https://discord.gg/orderlynetwork' },
];

export default function Footer(): ReactElement {
  return (
    <FooterContainer>
      <SocialMediaContainer>
        {SOCIAL_MEDIA.map(({ text, path }, index) => (
          <>
            <SocialMediaLinkWrapper>
              <SocialMediaLink target='_blank' rel='noopener noreferrer' key={`social-item-${index}`} href={path}>
                {text}
              </SocialMediaLink>
            </SocialMediaLinkWrapper>
            {SOCIAL_MEDIA.length - 1 !== index ? <LinksDivider orientation='vertical' /> : null}
          </>
        ))}
      </SocialMediaContainer>

      <CopyrightText>Copyright © 2022 Orderly Network All Rights Reserved.</CopyrightText>
    </FooterContainer>
  );
}
