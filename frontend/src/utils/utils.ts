export const isNotEmptyString = (value: string): boolean => !!value.trim();
export const getArrayWithUniqueValues = <T>(array: T[]): T[] => [...new Set(array)];
