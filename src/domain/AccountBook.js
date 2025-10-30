class AccountBook {
  #purchaseAmount = 0;
  #incomeAmount = 0;

  writePurchase(purchase) {
    this.#purchaseAmount += purchase;
  }

  writeIncome(winningAmount) {
    this.#incomeAmount += winningAmount;
  }

  getPurchase() {
    return this.#purchaseAmount;
  }

  getIncome() {
    return this.#incomeAmount;
  }

  calculrateYield() {
    const myYield = (this.#incomeAmount / this.#purchaseAmount) * 100;
    return Number(myYield.toFixed(1));
  }
}
export default AccountBook;
