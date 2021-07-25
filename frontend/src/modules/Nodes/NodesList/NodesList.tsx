import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { StyledWrapper } from './NodesList.styles';
import { RootStateType } from '~/shared/types';
import Node from '../Node';

interface IProps {}

const NodesList = ({}: IProps) => {
  const nodes = useSelector((store: RootStateType) => store.nodes.items);

  return (
    <StyledWrapper>
      {nodes.map(node => (
        <Node {...node} key={node.id} />
      ))}
    </StyledWrapper>
  );
};

export default memo(NodesList);
