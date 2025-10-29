import UtilValidator from '../../src/validator/UtilValidator.js';

describe('UtilValidator', () => {
  describe('숫자 변환 가능 여부 검사,isConvertNum', () => {
    test.each([
      ['1', true],
      ['0', true],
      ['-1', true],
    ])('성공 테스트 (%s) returns %s', (test, expected) => {
      expect(UtilValidator.isConvertNum(test)).toBe(expected);
    });
    test.each([
      ['1,000', false],
      ['1+2', false],
      ['', false],
      [' ', false],
      [undefined, false],
      [null, false],
    ])('실패 테스트(%s) returns %s', (test, expected) => {
      expect(UtilValidator.isConvertNum(test)).toBe(expected);
    });
  });
});
