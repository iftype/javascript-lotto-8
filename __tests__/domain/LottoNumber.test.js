import LOTTO_SETTING from '../../src/constants/lottoSetting.js';
import LottoNumber from '../../src/domain/LottoNumber.js';

const { MIN_RANGE, MAX_RANGE } = LOTTO_SETTING;
describe('LottoNumber 클래스 테스트', () => {
  describe('생성자 에러 검사', () => {
    test(`최소범위 테스트 ${MIN_RANGE - 1}`, () => {
      expect(() => new LottoNumber(MIN_RANGE - 1)).toThrow('[ERROR]');
    }); //test

    test(`최대범위 테스트 ${MAX_RANGE - 1}`, () => {
      expect(() => new LottoNumber(MAX_RANGE + 1)).toThrow('[ERROR]');
    }); //test
  }); //describe 생성자 에러 검사

  describe('생성자 성공 검사', () => {
    test(`최소범위 테스트 ${MIN_RANGE}`, () => {
      expect(() => new LottoNumber(MIN_RANGE)).not.toThrow();
    }); //test

    test(`최대범위 테스트 ${MAX_RANGE}`, () => {
      expect(() => new LottoNumber(MAX_RANGE)).not.toThrow();
    }); //test
  }); //describe 생성자 성공 검사

  describe('생성자 성공 검사', () => {
    test(`최소범위 테스트 ${MIN_RANGE}`, () => {
      const lottoNum = new LottoNumber(MIN_RANGE);
      expect(lottoNum.getNumber()).toBe(MIN_RANGE);
    }); //test
  }); //describe 메서드 검사
}); //describe
