import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NodesActions } from './Nodes.actions';
import Button from '~/components/Button';
import ButtonsContainer from './ButtonsContainer';
import SaveIcon from '@material-ui/icons/Save';
import NodesList from './NodesList';
import Flex from '~/components/Flex';
import { RootStateType } from '~/shared/types';
import { StyledWrapper } from './NodesDashboard.styles';

interface IProps {}

const NodesDashboard = ({}: IProps) => {
  const dispatch = useDispatch();
  const canSaveChanges = useSelector((state: RootStateType) => state.nodes.hasBeenModified);

  const handleSaveNodes = () => {
    dispatch(NodesActions.saveNodes());
  };

  useEffect(() => {
    dispatch(NodesActions.getNodes());
  }, []);

  return (
    <StyledWrapper>
        <ButtonsContainer />
        <NodesList />
        <Button color="primary" startIcon={<SaveIcon />} disabled={!canSaveChanges} onClick={handleSaveNodes}>
          Save
        </Button>
    </StyledWrapper>
  );
};

export default memo(NodesDashboard);
