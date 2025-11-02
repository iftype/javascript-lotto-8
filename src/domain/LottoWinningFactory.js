class LottoWinningFactory {
  #lottoNumberFactory;

  constructor(lottoNumberFactory) {
    this.#lottoNumberFactory = lottoNumberFactory;
  }

  createWinningLotto(numbers) {
    return numbers.map((number) => this.#lottoNumberFactory.getLottoNumber(number));
  }

  createBonusLotto(number) {
    return this.#lottoNumberFactory.getLottoNumber(number);
  }
}

export default LottoWinningFactory;
