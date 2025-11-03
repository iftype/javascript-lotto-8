import Lotto from '../../src/domains/Lotto.js';
import ERROR_MESSAGES from '../../src/constants/errorMessages.js';
import LottoNumberFactoryInstance from '../../src/domains/LottoNumberFactory.js';

const MOCK_NUMBERS = [2, 1, 3, 4, 5, 6];
const mockLotto = new Lotto(MOCK_NUMBERS);
const mockLottoCopy = LottoNumberFactoryInstance.getLottoNumber(1);
const { MAX_QUANTITY } = Lotto.getQuan();

describe('로또 클래스 테스트', () => {
  describe('생성 유효성 테스트', () => {
    test.each([
      [[1, 2, 3, 4, 5], ERROR_MESSAGES.LOTTO_QUANTITY(MAX_QUANTITY)],
      [[1, 2, 3, 4, 5, 6, 7], ERROR_MESSAGES.LOTTO_QUANTITY(MAX_QUANTITY)],
    ])('❌수량 에러 테스트(%s) throw Error %s', (numbers, errorMessage) => {
      expect(() => new Lotto(numbers)).toThrow(errorMessage);
    }); // 실패테스트 수량

    test.each([[[1, 1, 3, 4, 5, 6], ERROR_MESSAGES.LOTTO_DUPLICATE]])(
      '❌중복 에러 테스트(%s) throw Error %s',
      (numbers, errorMessage) => {
        expect(() => new Lotto(numbers)).toThrow(errorMessage);
      },
    ); // 실패테스트 중복됐는가
  });

  describe('메서드 테스트', () => {
    test('⭕메서드 테스트 getNumbers() ', () => {
      const result = [1, 2, 3, 4, 5, 6];
      expect(mockLotto.getNumbers()).toEqual(result);
    }); // 성공 테스트

    test('⭕메서드 테스트 hasLottoNumber(lottoNumber)', () => {
      expect(mockLotto.hasLottoNumber(mockLottoCopy)).toBe(true);
    }); // 성공 테스트
  });
});
