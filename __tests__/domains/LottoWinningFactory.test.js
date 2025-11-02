import LottoWinningFactory from '../../src/domains/LottoWinningFactory.js';

class MockLottoNumber {
  constructor(number) {
    this.number = number;
  }
  getNumber() {
    return this.number;
  }
}
const mockLottoNumberFactory = {
  map: new Map(),
  getLottoNumber: jest.fn(function (number) {
    if (!this.map.has(number)) {
      this.map.set(number, new MockLottoNumber(number));
    }
    return this.map.get(number);
  }),
};
const factory = new LottoWinningFactory(mockLottoNumberFactory);
const result = [1, 2, 3, 4, 5, 6];

describe('LottoWinningFactory 테스트', () => {
  describe('createWinningLotto(numbers) 테스트', () => {
    test('', () => {
      const winningNumbers = factory.createWinningLotto(result);
      const winningNumbersCopy = factory.createWinningLotto(result);
      winningNumbers.forEach((winningNumber, index) => {
        expect(winningNumber.getNumber()).toBe(result[index]);
      }); // forEach
      expect(winningNumbers[0]).toBe(winningNumbersCopy[0]);
    }); // test
  }); // 생성 테스트
  describe('createBonusLotto(number) 테스트', () => {
    test('', () => {
      const bonusNumber = factory.createBonusLotto(result[0]);
      expect(bonusNumber.getNumber()).toBe(result[0]);
    }); // test
  }); // 생성 테스트
}); // LottoNumberFactory 테스트
