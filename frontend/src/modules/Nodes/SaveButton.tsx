import React, { memo } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import { useDispatch, useSelector } from 'react-redux';
import Button from '~/components/Button';
import { RootStateType } from '~/shared/types';
import { NodesActions } from './Nodes.actions';

const SaveButton = () => {
  const dispatch = useDispatch();
  const canSaveChanges = useSelector((state: RootStateType) => state.nodes.hasBeenModified);

  const handleSaveNodes = () => {
    dispatch(NodesActions.saveNodes());
  };

  return (
    <Button
      color="primary"
      startIcon={<SaveIcon />}
      disabled={!canSaveChanges}
      onClick={handleSaveNodes}
    >
      Save
    </Button>
  );
};

export default memo(SaveButton);
