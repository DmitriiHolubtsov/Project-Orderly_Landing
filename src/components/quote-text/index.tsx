import React, { ReactElement, ReactNode } from 'react';

import { DividerContainerWrapper, DividerContainer, DividerStyled } from './quote-text.styled';

interface QuoteText {
  children?: ReactNode;
}

export default function QuoteText({ children }: QuoteText): ReactElement {
  return (
    <DividerContainerWrapper>
      <DividerContainer>
        <DividerStyled orientation='vertical' flexItem />
      </DividerContainer>
      {children}
    </DividerContainerWrapper>
  );
}
