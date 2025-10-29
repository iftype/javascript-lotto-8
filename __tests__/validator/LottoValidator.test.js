import LottoValidator from '../../src/validator/LottoValidator.js';
import ERROR_MESSAGES from '../../src/constants/errorMessages.js';

describe('LottoValidator', () => {
  describe('로또를 생성할 수 있는지 validate', () => {
    test.each([[[1, 2, 3, 4, 5, 6]]])('⭕성공 테스트 (%s) 통과', (test) => {
      expect(() => LottoValidator.validate(test)).not.toThrow();
    });
    // 1. 번호들은 숫자인지?
    // 2. 번호들의 길이가 6인지?
    // 3. 번호들은 1-45범위에 포함되어 있는지?
    // 4. 번호들은 중복되지 않았는지?
    test.each([
      [['', 2, 3, 4, 5, 6], ERROR_MESSAGES.LOTTO_NOT_NUMBER],
      [[undefined, 2, 3, 4, 5, 6], ERROR_MESSAGES.LOTTO_NOT_NUMBER],
      [['1', 2, 3, 4, 5, 6], ERROR_MESSAGES.LOTTO_NOT_NUMBER],

      [[1, 2, 3, 4, 5], ERROR_MESSAGES.LOTTO_QUANTITY],
      [[1, 2, 3, 4, 5, 6, 7], ERROR_MESSAGES.LOTTO_QUANTITY],

      [[0, 2, 3, 4, 5, 6], ERROR_MESSAGES.LOTTO_RANGE],
      [[46, 2, 3, 4, 5, 6], ERROR_MESSAGES.LOTTO_RANGE],

      [[1, 1, 3, 4, 5, 6], ERROR_MESSAGES.LOTTO_DUPLICATE],
    ])('❌실패 테스트 (%s) throw Error %s', (test, expected) => {
      expect(() => LottoValidator.validate(test)).toThrow(expected);
    });
  });
});
