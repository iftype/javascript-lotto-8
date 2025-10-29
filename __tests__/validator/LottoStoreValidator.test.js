import LottoStoreValidator from '../../src/validator/LottoStoreValidator.js';
import ERROR_MESSAGES from '../../src/constants/errorMessages.js';

describe('LottoStoreValidator', () => {
  describe('구매 금액이 유효한지 validate', () => {
    test.each([[1000], [14000]])('⭕성공 테스트 (%s) 통과', (test) => {
      expect(LottoStoreValidator.validate(test)).not.toThrow();
    });

    // 1.숫자인지
    // 2.정수인지
    // 3.양수인지
    // 4.1000으로 나누어 떨어지는지
    test.each([
      [undefined, ERROR_MESSAGES.FORMAT_NOT_NUM],
      ['', ERROR_MESSAGES.FORMAT_NOT_NUM],
      [' ', ERROR_MESSAGES.FORMAT_NOT_NUM],
      ['10,', ERROR_MESSAGES.FORMAT_NOT_NUM],

      [0.1, ERROR_MESSAGES.INTEGER],
      [-0.1, ERROR_MESSAGES.INTEGER],
      ['0.1', ERROR_MESSAGES.INTEGER],

      ['0', ERROR_MESSAGES.POSITVE],
      [0, ERROR_MESSAGES.POSITVE],
      [-1, ERROR_MESSAGES.POSITVE],

      [900, ERROR_MESSAGES.UNIT],
      [1100, ERROR_MESSAGES.UNIT],
    ])('❌실패 테스트(%s) throw Error %s', (test, expected) => {
      expect(LottoStoreValidator.validate(test)).toThrow(expected);
    });
  });
});
