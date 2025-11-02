class PurchasedLottosDto {
  #lottos;

  constructor({ lottos }) {
    this.#lottos = lottos;
  }

  toJSON() {
    const lottosToArray = [...this.#lottos].map((lotto) => lotto.getNumbers());
    return {
      lottos: lottosToArray,
    };
  }
}
export default PurchasedLottosDto;
