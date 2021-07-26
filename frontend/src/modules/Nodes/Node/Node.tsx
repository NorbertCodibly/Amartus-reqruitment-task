import React, { memo } from 'react';
import { StyledWrapper, StyledLabel, StyledChildrenWrapper } from './Node.styles';
import NodeCheckbox from './NodeCheckbox';
import { INode } from '~/shared/types';

interface IProps extends INode {}

const Node = ({ id, name, children }: IProps) => {
  const hasChildNodes = !!children.length;

  return (
    <StyledWrapper>
      <StyledLabel>
        <NodeCheckbox nodeId={id} />
        {name}
      </StyledLabel>

      {hasChildNodes && (
        <StyledChildrenWrapper>
          {children.map(child => (
            <Node {...child} key={child.id} />
          ))}
        </StyledChildrenWrapper>
      )}
    </StyledWrapper>
  );
};

export default memo(Node);
