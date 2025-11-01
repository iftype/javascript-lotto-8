import Lotto from './Lotto.js';

class LottoFactory {
  #strategy;
  #lottoNumberFactory;

  constructor(strategy, lottoNumberFactory) {
    this.#strategy = strategy;
    this.#lottoNumberFactory = lottoNumberFactory;
  }

  createLotto(numbers) {
    const newArray = this.#strategy.pick(numbers);
    const creatdeNumbers = newArray.map((number) =>
      this.#lottoNumberFactory.getLottoNumber(number),
    );
    return new Lotto(creatdeNumbers);
  }
}

export default LottoFactory;
