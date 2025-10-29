import LottoUtilValidator from '../../src/validator/LottoUtilValidator.js';
// 🔴 전부 숫자인가?
// 🔴 번호는 6개인가?
// 🔴 숫자가 1-45인가?
// 🔴 로또 숫자가 중복은 없는가?
// 🔴 해당 번호가 로또 리스트에 포함되어있나?
describe('LottoUtilValidator', () => {
  describe('요소들이 숫자가 맞는지', () => {
    test.each([[[1, 2, 3, 4, 5, 6], true]])(
      '⭕성공 테스트(%s) throw Error %s',
      (test, expected) => {
        expect(LottoUtilValidator.isNumber(test)).toBe(expected);
      },
    );
    test.each([
      [['1, 2, 3, 4, 5,6'], false],
      [[null, 2, 3, 4, 5, 6, 7], false],
      [[undefined, 2, 3, 4, 5, 6, 7], false],
    ])('❌실패 테스트(%s) throw Error %s', (test, expected) => {
      expect(LottoUtilValidator.isNumber(test)).toBe(expected);
    });
  });

  describe('6개가 맞는지 isQuantity', () => {
    test.each([[[1, 2, 3, 4, 5, 6], true]])(
      '⭕성공 테스트(%s) throw Error %s',
      (test, expected) => {
        expect(LottoUtilValidator.isQuantity(test)).toBe(expected);
      },
    );
    test.each([
      [[1, 2, 3, 4, 5], false],
      [[1, 2, 3, 4, 5, 6, 7], false],
    ])('❌실패 테스트(%s) throw Error %s', (test, expected) => {
      expect(LottoUtilValidator.isQuantity(test)).toBe(expected);
    });
  });

  describe('범위가 1-45인지 isOutRange', () => {
    test.each([
      [[0, 2, 3, 4, 5, 6], true],
      [[46, 2, 3, 4, 5, 6], true],
    ])('⭕성공 테스트(%s) throw Error %s', (test, expected) => {
      expect(LottoUtilValidator.isOutRange(test)).toBe(expected);
    });
    test.each([[[1, 2, 3, 4, 5, 6], false]])(
      '❌실패 테스트(%s) throw Error %s',
      (test, expected) => {
        expect(LottoUtilValidator.isOutRange(test)).toBe(expected);
      },
    );
  });

  describe('로또 번호가 중복됐는지 isDuplicate', () => {
    test.each([[[1, 1, 3, 4, 5, 6], true]])(
      '⭕성공 테스트(%s) throw Error %s',
      (test, expected) => {
        expect(LottoUtilValidator.isDuplicate(test)).toBe(expected);
      },
    );
    test.each([[[1, 2, 3, 4, 5, 6], false]])(
      '❌실패 테스트(%s) throw Error %s',
      (test, expected) => {
        expect(LottoUtilValidator.isDuplicate(test)).toBe(expected);
      },
    );
  });

  describe('해당 번호가 중복되어있는지 hasLottoList', () => {
    test.each([
      [1, [1, 2, 3, 4, 5, 6], true],
      [6, [1, 2, 3, 4, 5, 6], true],
    ])('⭕성공 테스트(%s는 %s에 포함되었나?) throw Error %s', (target, list, expected) => {
      expect(LottoUtilValidator.hasLottoList(target, list)).toBe(expected);
    });
  });
  test.each([
    [11, [1, 2, 3, 4, 5, 6], false],
    [31, [1, 2, 3, 4, 5, 6], false],
  ])('⭕실패 테스트(%s는 %s에 포함되었나?) throw Error %s', (target, list, expected) => {
    expect(LottoUtilValidator.hasLottoList(target, list)).toBe(expected);
  });
});
