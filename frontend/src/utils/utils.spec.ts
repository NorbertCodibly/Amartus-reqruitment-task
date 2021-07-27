import {
  whenProvidedArrayWithDuplicatedValues,
  whenProvidedEmptyString,
  whenProvidedStringFilledWithWhiteSpaces,
  whenProvidedAnArray,
  whenProvidedStringWithLetter,
  thenDuplicatedValuesAreBeingRemoved,
  thenItShouldBeAnEmptyString,
  thenItShouldNotBeAnEmptyString,
} from './utils.spec.helper';

describe('utils', () => {
  describe('isEmptyString', () => {
    it('should return true for empty string', () => {
      const value = whenProvidedEmptyString();
      thenItShouldBeAnEmptyString(value);
    });

    it('should return true for string containing only white spaces', () => {
      const value = whenProvidedStringFilledWithWhiteSpaces();
      thenItShouldBeAnEmptyString(value);
    });

    it('should return false when providedd value is not a string', () => {
      const value = whenProvidedAnArray();
      thenItShouldNotBeAnEmptyString(value);
    });

    it('should return false when string contains non white space character', () => {
      const value = whenProvidedStringWithLetter();
      thenItShouldNotBeAnEmptyString(value);
    });
  });

  describe('getArrayWithUniqueValues', () => {
    it('should remove duplicated values from array', () => {
      const array = whenProvidedArrayWithDuplicatedValues();
      thenDuplicatedValuesAreBeingRemoved(array);
    });
  });
});
