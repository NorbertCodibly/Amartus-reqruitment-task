import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NodesActions } from './Nodes.actions';
import Button from '~/components/Button';
import ButtonsContainer from './ButtonsContainer';
import SaveIcon from '@material-ui/icons/Save';
import NodesList from './NodesList';
import { StyledWrapper } from './NodesDashboard.styles';

interface IProps {}

const NodesDashboard = ({}: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(NodesActions.getNodes());
  }, []);

  return (
    <StyledWrapper>
      <ButtonsContainer />
      <NodesList />
      <Button color="primary" startIcon={<SaveIcon />}>
        Add
      </Button>
    </StyledWrapper>
  );
};

export default memo(NodesDashboard);
