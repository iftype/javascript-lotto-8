import Lotto from './Lotto.js';

class LottoWinningFactory {
  #lottoNumberFactory;

  constructor(lottoNumberFactory) {
    this.#lottoNumberFactory = lottoNumberFactory;
  }

  createWinningLotto(numbers) {
    const newNumbers = numbers.map((number) => this.#lottoNumberFactory.getLottoNumber(number));
    return new Lotto(newNumbers);
  }

  createBonusLotto(number) {
    return this.#lottoNumberFactory.getLottoNumber(number);
  }
}

export default LottoWinningFactory;
