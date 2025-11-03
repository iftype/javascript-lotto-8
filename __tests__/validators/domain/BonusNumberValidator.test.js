import ERROR_MESSAGES from '../../../src/constants/errorMessages.js';
import BonusNumberValidator from '../../../src/validators/domain/BonusNumberValidator.js';
class MockLottoNumber {
  constructor(number) {
    this.number = number;
  }
  getNumber() {
    return this.number;
  }
}
const createMockLost = (numbers) => numbers.map((n) => new MockLottoNumber(n));
const testLottoNumber = new MockLottoNumber(0);
describe('BonusNumberValidator 클래스 테스트', () => {
  describe('구매금액 유효성 검사 실패 테스트', () => {
    const mockLottoList = createMockLost([1, 2, 3, 4, 5, 6]);
    test.each([[mockLottoList, mockLottoList[1], ERROR_MESSAGES.LOTTO_DUPLICATE]])(
      '❌ validate 테스트 %s %sthrow Error %s',
      (numbers, number, errorMessage) => {
        console.log('object', testLottoNumber.getNumber());
        expect(() => BonusNumberValidator.validate(numbers, number)).toThrow(errorMessage);
      },
    ); // 실패테스트
  }); //describe
  describe('구매금액 유효성 검사 ⭕성공테스트', () => {
    test.each([[[1, 2, 3, 4, 5, 6], 7]])('통과해야됨 %s', (numbers, number) => {
      const newNum = new MockLottoNumber(number);
      expect(() => BonusNumberValidator.validate(numbers, newNum)).not.toThrow();
    }); // 성공테스트
  }); //describe
}); //describe 클래스 테스트
