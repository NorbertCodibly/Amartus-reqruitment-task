import React, { memo } from 'react';
import { StyledWrapper } from './Node.styles';
import NodeCheckbox from './NodeCheckbox';
import { INode } from '~/shared/types';

interface IProps extends INode {}

const Node = ({ id, name, children }: IProps) => {
  return (
    <StyledWrapper>
      <div>
        <NodeCheckbox nodeId={id} />
        {name}
      </div>
      <>
        {children.map(child => (
          <Node {...child} key={child.id} />
        ))}
      </>
    </StyledWrapper>
  );
};

export default memo(Node);
