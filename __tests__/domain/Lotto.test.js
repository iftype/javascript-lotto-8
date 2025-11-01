import Lotto from '../../src/domain/Lotto.js';
import LottoNumber from '../../src/domain/LottoNumber.js';
import ERROR_MESSAGES from '../../src/constants/errorMessages.js';

const createlottoNumbers = (numbers) => {
  return numbers.map((numbers) => new LottoNumber(numbers));
};

describe('로또 클래스 테스트', () => {
  describe('생성 유효성 테스트', () => {
    test.each([
      [[1, 2, 3, 4, 5], ERROR_MESSAGES.LOTTO_QUANTITY],
      [[1, 2, 3, 4, 5, 6, 7], ERROR_MESSAGES.LOTTO_QUANTITY],
    ])('❌수량 에러 테스트(%s) throw Error %s', (numbers, errorMessage) => {
      expect(() => new Lotto(createlottoNumbers(numbers))).toThrow(errorMessage);
    }); // 실패테스트 수량

    test.each([[[1, 1, 3, 4, 5, 6], ERROR_MESSAGES.LOTTO_DUPLICATE]])(
      '❌중복 에러 테스트(%s) throw Error %s',
      (numbers, errorMessage) => {
        expect(() => new Lotto(createlottoNumbers(numbers))).toThrow(errorMessage);
      },
    ); // 실패테스트 중복됐는가
  });

  describe('메서드 테스트', () => {
    test('⭕메서드 테스트 getNumbers() ', () => {
      const numbers = [6, 2, 3, 4, 5, 1];
      const lotto = new Lotto(createlottoNumbers(numbers));

      const resultArray = [1, 2, 3, 4, 5, 6];
      expect(lotto.getNumbers()).toEqual(resultArray);
    }); // 성공 테스트

    test('⭕메서드 테스트 hasNumber(number)', () => {
      const numbers = [6, 2, 3, 4, 5, 1];
      const lotto = new Lotto(createlottoNumbers(numbers));

      expect(lotto.hasNumber(6)).toBe(true);
    }); // 성공 테스트

    test('⭕메서드 테스트 countNumbers(numbers)', () => {
      const numbers = [6, 2, 3, 4, 5, 1];
      const lotto = new Lotto(createlottoNumbers(numbers));

      const resultArray = [1, 2, 3, 4, 5, 6];
      expect(lotto.countNumbers(resultArray)).toBe(6);
    }); // 성공 테스트
  });
});
