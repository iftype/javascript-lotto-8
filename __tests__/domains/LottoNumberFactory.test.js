import LottoNumberFactory from '../../src/domains/LottoNumberFactory.js';
import LottoNumberFactoryCopy from '../../src/domains/LottoNumberFactory.js';
import LottoNumber from '../../src/domains/LottoNumber.js';

const { MIN_RANGE, MAX_RANGE } = LottoNumber.getRange();
describe('LottoNumberFactory 테스트', () => {
  beforeEach(() => {});

  describe('생성 테스트', () => {
    test('같은 인스턴스여야함', () => {
      // 싱글턴 참조확인용
      expect(LottoNumberFactory).toBe(LottoNumberFactoryCopy);
    });
  }); // 생성 테스트

  describe('메서드 getLottoNumber 에러테스트', () => {
    test.each([[MIN_RANGE - 1], [MAX_RANGE + 1]])('❌에러 테스트(%s) throw Error %s', (test) => {
      expect(() => LottoNumberFactory.getLottoNumber(test)).toThrow('[ERROR]');
    }); // 실패테스트

    test.each([[MIN_RANGE], [MAX_RANGE]])('⭕성공 테스트(%s)', (number) => {
      const lottoNumber = LottoNumberFactory.getLottoNumber(number);
      expect(lottoNumber.getNumber(number)).toBe(number);
    }); // 성공테스트
  }); // 메서드 테스트
}); // LottoNumberFactory 테스트
