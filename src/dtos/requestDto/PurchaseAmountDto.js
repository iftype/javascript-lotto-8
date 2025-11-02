import InputPurchaseAmountValidator from '../../validators/input/InputPurchaseAmountValidator.js';

class PurchaseAmountDto {
  #purchaseAmount;

  constructor(purchaseAmount) {
    const convertedPurchaseAmount = Number(purchaseAmount);
    InputPurchaseAmountValidator.validate(convertedPurchaseAmount);
    this.#purchaseAmount = convertedPurchaseAmount;
  }

  get purchaseAmount() {
    return this.#purchaseAmount;
  }
}
export default PurchaseAmountDto;
