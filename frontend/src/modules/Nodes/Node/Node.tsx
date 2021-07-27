import React, { memo } from 'react';
import Typography from '@material-ui/core/Typography';
import { INode } from '~/shared/types';
import { StyledWrapper, StyledLabel, StyledChildrenWrapper } from './Node.styles';
import NodeCheckbox from './NodeCheckbox';

interface IProps extends INode {}

const Node = ({ id, name, children }: IProps) => {
  const hasChildNodes = !!children.length;

  return (
    <StyledWrapper>
      <StyledLabel>
        <NodeCheckbox nodeId={id} />
        <Typography>{name}</Typography>
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
