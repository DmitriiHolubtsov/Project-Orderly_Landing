import { ButtonProps as MuiButtonProps } from '@mui/material';
import React, { ReactElement } from 'react';

import { ButtonStyled } from './button.styled';

interface ButtonProps extends MuiButtonProps {
  /**
   * @param {string} className -default property which required by styled-components
   * https://styled-components.com/docs/basics#styling-any-component
   * @default undefined
   */
  className?: string;
}

export default function Button({ children, ...props }: ButtonProps): ReactElement {
  return (
    <ButtonStyled variant='outlined' {...props}>
      {children}
    </ButtonStyled>
  );
}
