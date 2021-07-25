import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NodesActions } from './Nodes.actions';

interface IProps {}

const NodesDashboard = ({}: IProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(NodesActions.getNodes());
  }, []);

  return (
    <div>
      <button>Add</button>
      <button>Update</button>
      <button>Delete</button>
      <div>Content</div>
      <button onClick={() => dispatch(NodesActions.saveNodes())}>Save</button>
    </div>
  );
};

export default memo(NodesDashboard);
