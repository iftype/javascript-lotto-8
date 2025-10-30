import Lotto from '../src/domain/Lotto.js';

describe('로또 클래스 테스트', () => {
  describe('유효성 검사', () => {
    test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow('[ERROR]');
    });

    test('로또 번호에 숫자가 없으면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto(['1', 2, 3, 4, 5, 6]);
      }).toThrow('[ERROR]');
    });

    test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5]);
      }).toThrow('[ERROR]');
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 6, 7]);
      }).toThrow('[ERROR]');
    });

    test('로또 번호가 1-45를 벗어나면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
      }).toThrow('[ERROR]');
    });

    test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
      expect(() => {
        new Lotto([1, 2, 3, 4, 5, 5]);
      }).toThrow('[ERROR]');
    });
  });

  describe('메서드 테스트', () => {
    test('getNumbers 하면 정렬된 배열이 나와야함', () => {
      const originalNumbers = [2, 1, 3, 4, 5, 6];
      const newLotto = new Lotto(originalNumbers);

      const resultNumbers = [1, 2, 3, 4, 5, 6];
      expect(newLotto.getNumbers()).toEqual(resultNumbers);
    });
  });
});
