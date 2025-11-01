import PurchaseValidator from '../../validator/PurchaseValidator.js';

class PurchaseAmountDto {
  #purchaseAmount;
  constructor({ purchaseAmount }) {
    PurchaseValidator.validate(purchaseAmount);
    this.#purchaseAmount = Number(purchaseAmount);
  }

  get purchaseAmount() {
    return this.#purchaseAmount;
  }
}
export default PurchaseAmountDto;
