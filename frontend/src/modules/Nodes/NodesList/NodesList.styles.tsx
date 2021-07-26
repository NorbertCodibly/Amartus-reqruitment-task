import styled from 'styled-components';
import { autoVerticallyScrollableFlexItem } from '~/utils';

export const StyledWrapper = styled.div`
  width: 100%;
  margin: 1.5rem 0;
  padding: 1rem 0;
  border-radius: 12px;
  box-shadow: rgba(100, 100, 111, 0.25) 0px 5px 29px 0px;
  max-width: 100%;

  ${autoVerticallyScrollableFlexItem};
`;
