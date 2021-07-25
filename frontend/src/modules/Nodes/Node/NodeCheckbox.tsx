import React, { memo } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { RootStateType } from '~/shared/types';
import { NodesActions } from '../Nodes.actions';

interface IProps {
  nodeId: number;
}

const NodeCheckbox = ({ nodeId }: IProps) => {
  const dispatch = useDispatch();
  const isChecked = useSelector((store: RootStateType) => store.nodes.selectedNodeId === nodeId);

  const handleChange = () => {
    dispatch(NodesActions.selectNode(nodeId));
  };

  return <Checkbox onChange={handleChange} checked={isChecked} />;
};

export default memo(NodeCheckbox);
