class NodesMock {
  static nodes: [
    {
      id: 2;
      name: 'kudu';
      pid: null;
    },
    {
      id: 1;
      name: 'my node';
      pid: 2;
    },
    {
      id: 3;
      name: 'node-xyz';
      pid: 2;
    },
    {
      id: 4;
      name: 'super node';
      pid: null;
    },
    {
      id: 55;
      name: 'abc';
      pid: 4;
    },
    {
      id: 67;
      name: 'aafsdf';
      pid: 4;
    },
    {
      id: 10;
      name: 'bbb';
      pid: 4;
    },
    {
      id: 11;
      name: 'cool node';
      pid: 10;
    },
    {
      id: 7;
      name: 'awesome node';
      pid: null;
    }
  ];

  static nodesDto: [
    [
      { id: 1; name: 'my node'; pid: 2 },
      { id: 2; name: 'kudu'; pid: null },
      { id: 3; name: 'node-xyz'; pid: 2 },
      { id: 4; name: 'super node'; pid: null },
      { id: 55; name: 'abc'; pid: 4 },
      { id: 67; name: 'aafsdf'; pid: 4 },
      { id: 10; name: 'bbb'; pid: 4 },
      { id: 11; name: 'cool node'; pid: 10 },
      { id: 7; name: 'awesome node'; pid: null }
    ]
  ];
}

export default NodesMock;
