import React, { memo } from 'react';
import { ButtonProps } from '@material-ui/core/Button';
import { StyledButton } from './Button.styles';

const Button = ({ children, ...passedProps }: ButtonProps) => {
  return (
    <StyledButton variant="contained" {...passedProps}>
      {children}
    </StyledButton>
  );
};

export default memo(Button);
