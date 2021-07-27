module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(tsx|ts)?$': 'ts-jest',
  },
  testRegex: '.(test|spec).tsx?$',
  transformIgnorePatterns: ['<rootDir>/node_modules/*'],
};
