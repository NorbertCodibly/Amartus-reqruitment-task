import React, { memo } from 'react';
import Box, { BoxProps } from '@material-ui/core/Box';

const Flex = ({ children, ...passedProps }: BoxProps) => {
  return (
    <Box display="flex" {...passedProps}>
      {children}
    </Box>
  );
};

export default memo(Flex);
