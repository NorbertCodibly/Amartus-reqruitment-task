import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NodesActions } from './Nodes.actions';
import ButtonControls from './ButtonControls';
import NodesList from './NodesList';
import SaveButton from './SaveButton';
import { StyledWrapper } from './NodesModule.styles';

interface IProps {}

const NodesModule = ({}: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(NodesActions.getNodes());
  }, []);

  return (
    <StyledWrapper>
      <ButtonControls />
      <NodesList />
      <SaveButton />
    </StyledWrapper>
  );
};

export default memo(NodesModule);
