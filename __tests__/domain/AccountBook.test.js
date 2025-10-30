import AccountBook from '../../src/domain/AccountBook.js';

describe('AccountBook', () => {
  let accountBook;
  beforeEach(() => {
    accountBook = new AccountBook();
  });

  test('writePurchase로 지출 저장 getPurchase로 확인', () => {
    const purchaseAmount = 5000;
    accountBook.writePurchase(purchaseAmount);
    expect(accountBook.getPurchase()).toBe(5000);
  });

  test('writeIncome로 수입저장 getIncome 로 확인', () => {
    const winningAmount = 5000;
    accountBook.writeIncome(winningAmount);
    expect(accountBook.getIncome()).toBe(5000);
  });

  test('calculrateYield() 수익률을 반환함', () => {
    const purchaseAmount = 8000;
    const winningAmount = 5000;
    accountBook.writePurchase(purchaseAmount);
    accountBook.writeIncome(winningAmount);
    expect(accountBook.calculrateYield()).toBe(62.5);
  });
});
