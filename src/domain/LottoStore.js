class LottoStore {
  #lottofactory;

  constructor(lottofactory) {
    this.#lottofactory = lottofactory;
  }

  buyLotto(count) {
    const lottos = [];
    for (let i = 0; i < count; i += 1) {
      lottos.push(this.#lottofactory.createLotto());
    }
    return lottos;
  }
}
export default LottoStore;
