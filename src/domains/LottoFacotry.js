import Lotto from './Lotto.js';

class LottoFactory {
  #piker;
  #lottoNumberFactory;

  constructor(piker, lottoNumberFactory) {
    this.#piker = piker;
    this.#lottoNumberFactory = lottoNumberFactory;
  }

  createLotto(numbers) {
    const newArray = this.#piker.pick(numbers);
    const creatdeNumbers = newArray.map((number) =>
      this.#lottoNumberFactory.getLottoNumber(number),
    );
    return new Lotto(creatdeNumbers);
  }
}

export default LottoFactory;
