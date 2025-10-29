import UtilValidator from '../../src/validator/UtilValidator.js';

describe('UtilValidator', () => {
  describe('정수인지 검사 isInteger', () => {
    test.each([
      [1, true],
      [0, true],
      [-1, true],
      ['0', true],
      ['1', true],
    ])('⭕성공 테스트 (%s) return %s', (test, expected) => {
      expect(UtilValidator.isInteger(test)).toBe(expected);
    });
    test.each([
      ['', false],
      [' ', false],
      [undefined, false],
      [null, false],
      [0.1, false],
      ['str', false],
    ])('❌실패 테스트(%s) return %s', (test, expected) => {
      expect(UtilValidator.isInteger(test)).toBe(expected);
    });
  });

  describe('양수인지 검사 isPositive', () => {
    test.each([
      [1, true],
      [0.1, true],
      ['1', true],
    ])('⭕성공 테스트 (%s) return %s', (test, expected) => {
      expect(UtilValidator.isPositive(test)).toBe(expected);
    });
    test.each([
      ['', false],
      [undefined, false],
      [null, false],
      ['0', false],
      [0, false],
      [-1, false],
      ['str', false],
    ])('❌실패 테스트(%s) return %s', (test, expected) => {
      expect(UtilValidator.isPositive(test)).toBe(expected);
    });
  });

  describe('숫자 변환 가능 여부 검사 isConvertNum', () => {
    test.each([
      ['1', true],
      ['0', true],
      ['-1', true],
    ])('성공 테스트 (%s) return %s', (test, expected) => {
      expect(UtilValidator.isConvertNum(test)).toBe(expected);
    });
    test.each([
      ['1,000', false],
      ['1+2', false],
      ['', false],
      [' ', false],
      [undefined, false],
      [null, false],
    ])('실패 테스트(%s) return %s', (test, expected) => {
      expect(UtilValidator.isConvertNum(test)).toBe(expected);
    });
  });

  describe('숫자인지 타입 체크 isNum', () => {
    test.each([
      [1, true],
      [0, true],
      [-1, true],
    ])('성공 테스트 (%s) return %s', (test, expected) => {
      expect(UtilValidator.isNum(test)).toBe(expected);
    });
    test.each([
      ['1,000', false],
      ['1+2', false],
      ['1', false],
      ['', false],
      [' ', false],
      [undefined, false],
      [null, false],
    ])('실패 테스트(%s) return %s', (test, expected) => {
      expect(UtilValidator.isNum(test)).toBe(expected);
    });
  });
});
