class LottoStore {
  #purchaseAmount = 0;
  #lottofactory;

  constructor(lottofactory) {
    this.#lottofactory = lottofactory;
  }

  buyLotto(purchaseAmount, count) {
    this.#purchaseAmount = purchaseAmount;

    const lottos = [];
    for (let i = 0; i < count; i += 1) {
      lottos.push(this.#lottofactory.createLotto());
    }
    return lottos;
  }
}
export default LottoStore;
