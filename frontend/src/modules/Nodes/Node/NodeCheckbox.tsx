import React, { memo } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { useSelector, useDispatch } from 'react-redux';
import { NodesMapper } from '../mapper';
import { NodesActions } from '../Nodes.actions';

interface IProps {
  nodeId: number;
}

const NodeCheckbox = ({ nodeId }: IProps) => {
  const dispatch = useDispatch();
  const isChecked = useSelector(NodesMapper.mapStateToSelectedNodeId) === nodeId;

  const handleChange = () => {
    dispatch(NodesActions.selectNode(nodeId));
  };

  return <Checkbox onChange={handleChange} checked={isChecked} color="primary" />;
};

export default memo(NodeCheckbox);
