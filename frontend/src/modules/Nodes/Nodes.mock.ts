import { INode } from '~/shared/types';
import { INodeDto } from '~/shared/dto';

interface INodesMock {
  nodes: INode[];
  nodesDto: INodeDto[];
}

export const NodesMock: INodesMock = {
  nodes: [
    {
      id: 2,
      name: 'kudu',
      children: [
        { id: 1, name: 'my node', children: [] },
        { id: 3, name: 'node-xyz', children: [] },
      ],
    },
    {
      id: 4,
      name: 'super node',
      children: [
        { id: 55, name: 'abc', children: [] },
        { id: 67, name: 'aafsdf', children: [] },
        {
          id: 10,
          name: 'bbb',
          children: [{ id: 11, name: 'cool node', children: [] }],
        },
      ],
    },
    { id: 7, name: 'awesome node', children: [] },
  ],

  nodesDto: [
    { id: 2, name: 'kudu', pid: null },
    { id: 1, name: 'my node', pid: 2 },
    { id: 3, name: 'node-xyz', pid: 2 },
    { id: 4, name: 'super node', pid: null },
    { id: 55, name: 'abc', pid: 4 },
    { id: 67, name: 'aafsdf', pid: 4 },
    { id: 10, name: 'bbb', pid: 4 },
    { id: 11, name: 'cool node', pid: 10 },
    { id: 7, name: 'awesome node', pid: null },
  ],
};
