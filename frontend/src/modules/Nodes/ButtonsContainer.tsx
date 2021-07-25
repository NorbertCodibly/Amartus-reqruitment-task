import React, { memo } from 'react';
import Button from '~/components/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddIcon from '@material-ui/icons/Add';
import UpdateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from '~/shared/types';
import { NodesActions } from './Nodes.actions';

interface IProps {}

const ButtonsContainer = ({}: IProps) => {
  const dispatch = useDispatch();
  const canPerformActionOnNode = useSelector(
    (state: RootStateType) => state.nodes.selectedNodeId !== null
  );

  const handleAddNode = () => {
    dispatch(NodesActions.addNode());
  };

  const handleDeleteNode = () => {
    dispatch(NodesActions.deleteNode());
  };

  const handleUpdateNode = () => {
    const nodeName = window.prompt('Insert a new name for the node');
    // TODO Norbert -> zrobić utilsa na empty stringa (z trimem)
    if (nodeName) {
      dispatch(NodesActions.updateNode(nodeName));
    }
  };

  return (
    <ButtonGroup variant="contained" disabled={!canPerformActionOnNode}>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleAddNode}>
        Add
      </Button>
      <Button color="secondary" startIcon={<UpdateIcon />} onClick={handleUpdateNode}>
        Update
      </Button>
      <Button color="primary" startIcon={<DeleteIcon />} onClick={handleDeleteNode}>
        Delete
      </Button>
    </ButtonGroup>
  );
};

export default memo(ButtonsContainer);
