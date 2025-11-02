class LottoWinningFactory {
  #lottoNumberFactory;

  constructor(lottoNumberFactory) {
    this.#lottoNumberFactory = lottoNumberFactory;
  }

  createWinningLotto(numbers) {
    const newArray = numbers;
    return newArray.map((number) => this.#lottoNumberFactory.getLottoNumber(number));
  }

  createBonusLotto(number) {
    return this.#lottoNumberFactory.getLottoNumber(number);
  }
}

export default LottoWinningFactory;
