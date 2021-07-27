import { getArrayWithUniqueValues, isEmptyString } from './utils';

const arrayWithDuplicatedValues = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const arrayWithoutDuplicatedValues = [1];
const emptyString = '';
const stringFilledWithWhiteSpaces = ' '.repeat(15);
const stringWithLetter = `${stringFilledWithWhiteSpaces}a`;

export const whenProvidedArrayWithDuplicatedValues = () => {
  return arrayWithDuplicatedValues;
};

export const whenProvidedEmptyString = () => {
  return emptyString;
};

export const whenProvidedStringFilledWithWhiteSpaces = () => {
  return stringFilledWithWhiteSpaces;
};

export const whenProvidedAnArray = () => {
  return arrayWithDuplicatedValues;
};

export const whenProvidedStringWithLetter = () => {
  return stringWithLetter;
};

export const thenDuplicatedValuesAreBeingRemoved = (array: unknown[]) => {
  expect(getArrayWithUniqueValues(array)).toEqual(arrayWithoutDuplicatedValues);
};

export const thenItShouldNotBeAnEmptyString = (value: any) => {
  expect(isEmptyString(value)).toBeFalsy();
};

export const thenItShouldBeAnEmptyString = (value: any) => {
  expect(isEmptyString(value)).toBeTruthy();
};
