import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NodesActions } from './Nodes.actions';
import Button from '~/components/Button';
import ButtonsContainer from './ButtonsContainer';
import SaveIcon from '@material-ui/icons/Save';
import NodesList from './NodesList';
import { RootStateType } from '~/shared/types';
import { StyledWrapper } from './NodesDashboard.styles';

interface IProps {}

const NodesDashboard = ({}: IProps) => {
  const dispatch = useDispatch();
  const canSaveChanges = useSelector((state: RootStateType) => state.nodes.hasBeenModified);

  useEffect(() => {
    dispatch(NodesActions.getNodes());
  }, []);

  return (
    <StyledWrapper>
      <ButtonsContainer />
      <NodesList />
      <Button color="primary" startIcon={<SaveIcon />} disabled={!canSaveChanges}>
        Add
      </Button>
    </StyledWrapper>
  );
};

export default memo(NodesDashboard);
