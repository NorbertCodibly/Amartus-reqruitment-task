import React, { memo } from 'react';
import Button from '~/components/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddIcon from '@material-ui/icons/Add';
import UpdateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

interface IProps {}

const ButtonsContainer = ({}: IProps) => {
  return (
    <ButtonGroup variant="contained">
      <Button color="primary" startIcon={<AddIcon />}>
        Add
      </Button>
      <Button color="secondary" startIcon={<UpdateIcon />}>
        Update
      </Button>
      <Button color="primary" startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </ButtonGroup>
  );
};

export default memo(ButtonsContainer);
