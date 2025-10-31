import LottoNumber from '../../src/domain/LottoNumber.js';

describe('LottoNumber 클래스 테스트', () => {
  let min;
  let max;

  beforeEach(() => {
    [min, max] = Object.values(LottoNumber.getRange());
  });

  describe('생성자 에러 검사', () => {
    test(`최소범위 테스트 ${min - 1}`, () => {
      expect(() => new LottoNumber(min - 1)).toThrow('[ERROR]');
    }); //test

    test(`최대범위 테스트 ${max - 1}`, () => {
      expect(() => new LottoNumber(max + 1)).toThrow('[ERROR]');
    }); //test
  }); //describe 생성자 에러 검사

  describe('생성자 성공 검사', () => {
    test(`최소범위 테스트 ${min}`, () => {
      expect(() => new LottoNumber(min)).not.toThrow();
    }); //test

    test(`최대범위 테스트 ${max}`, () => {
      expect(() => new LottoNumber(max)).not.toThrow();
    }); //test
  }); //describe 생성자 성공 검사

  describe('생성자 성공 검사', () => {
    test(`최소범위 테스트 ${min}`, () => {
      const lottoNum = new LottoNumber(min);
      expect(lottoNum.getNumber()).toBe(min);
    }); //test
  }); //describe 메서드 검사
}); //describe
