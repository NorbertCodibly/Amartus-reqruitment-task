export const isEmptyString = (value?: string): boolean =>
  typeof value === 'string' && !value.trim();
export const getArrayWithUniqueValues = <T>(array: T[]): T[] => [...new Set(array)];
