class LottoPrice {
  static #PURCHASE_UNIT = 1000;

  static exchange(purchaseAmount) {
    return purchaseAmount / LottoPrice.#PURCHASE_UNIT;
  }

  static modUnit(purchaseAmount) {
    return purchaseAmount % LottoPrice.#PURCHASE_UNIT;
  }
}
export default LottoPrice;
